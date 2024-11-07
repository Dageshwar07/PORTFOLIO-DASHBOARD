import {
  addNewSkill,
  clearAllSkillErrors,
  getAllSkills,
  resetSkillSlice,
} from "@/store/slices/skillSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import SpecialLoadingButton from "./SpecialLoadingButton";

const AddSkill = () => {
  const [title, setTitle] = useState("");
  const [proficiency, setProficiency] = useState("");
  const [svg, setSvg] = useState("");
  const [svgPreview, setSvgPreview] = useState("");

  const handleSvg = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSvgPreview(reader.result);
      setSvg(file);
    };
  };

  const { loading, message, error } = useSelector((state) => state.skill);

  console.log("loading ---->", loading);
  const dispatch = useDispatch();
  const handleAddNewSkill = (e) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("proficiency", proficiency);
    formData.append("svg", svg);
    dispatch(addNewSkill(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllSkillErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetSkillSlice());
      dispatch(getAllSkills());
    }
  }, [dispatch, loading, error]);

  return (
    <form
      className="container flex flex-col gap-7 lg:gap-10  px-5 lg:px-32"
      onSubmit={handleAddNewSkill}
    >
      <div className=" border-gray-900/10 flex flex-col">
        <h2 className="text-center text-gray-600 font-bold text-xl lg:text-3xl">
          ADD A NEW SKILL
        </h2>
        <div className=" flex flex-col">
          <div className="w-full sm:col-span-4">
            <label className="block text-m font-medium leading-6 text-gray-900">
              Title
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                  type="text"
                  className="shadow-lg pl-3 block flex-1 border-0 bg-transparent py-1.5 text-sm text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="React.JS"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="w-full sm:col-span-4">
            <label className="block text-m font-medium leading-6 text-gray-900">
              Proficiency
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                  type="number"
                  className="shadow-lg pl-3 block flex-1 border-0 bg-transparent py-1.5 text-sm text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="30"
                  value={proficiency}
                  onChange={(e) => setProficiency(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="w-full col-span-full">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Skill Svg
            </label>
            <div className="shadow-lg mt-2 flex justify-center rounded-lg border  border-gray-300 px-6 py-10">
              <div className="text-center">
                {svgPreview ? (
                  <img
                    className="mx-auto h-12 w-12 text-gray-300"
                    viewBox="0 0 24 24"
                    src={svgPreview ? `${svgPreview}` : "/docHolder.jpg"}
                  />
                ) : (
                  <svg
                    className="mx-auto h-12 w-12 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}

                <div className="mt-4 flex text-sm leading-6 text-gray-600 my-10">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleSvg}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!loading ? (
        <Button type="submit" className="" onClick={() => handleAddNewSkill()}>
          Add Skill
        </Button>
      ) : (
        <SpecialLoadingButton content={"Adding New Skill"} />
      )}
    </form>
  );
};

export default AddSkill;
