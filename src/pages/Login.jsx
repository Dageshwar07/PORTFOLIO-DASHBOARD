import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { clearAllUserErrors, login } from "@/store/slices/userSlice";
import { toast } from "react-toastify";
import SpecialLoadingButton from "./sub-components/SpecialLoadingButton";
import { GiEyelashes } from "react-icons/gi";
import { GiTiredEye } from "react-icons/gi";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleLogin = () => {
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, isAuthenticated, error, loading]);

  const [showPassword, setShowPassword] = useState(true);

  return (
    <div className="container  mx-auto   flex flex-col lg:flex-row justify-center gap-10 text-gray-500 py-32 ">
      <div className="flex justify-center items-center">
        <img src="/login.png" alt="login" className="h-40 lg:h-72" />
      </div>
      <div className=" flex items-center justify-center  md:mx-auto lg:mx-0 rounded-xl p-6 lg:p-12 md:p-16 my-auto md:w-96 lg:w-auto shadow-2xl">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-600 ">
              Login
            </h1>
            <p className="pb-2">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4 lg:py-10">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-lg font-semibold">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="portFolio@example.com"
                value={email}
                className="rounded-full active:outline-none"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2 relative">
              <div className="flex items-center">
                <Label className="text-lg font-semibold">Password</Label>
              </div>
              <Input
                type={showPassword ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
                className="rounded-full active:outline-none"
              />
              <div
                className="size-4 absolute top-12 right-4 rounded-full"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? <IoMdEye /> : <IoMdEyeOff />}
              </div>
            </div>
            <Link
              to="/password/forgot"
              className="ml-auto inline-block text-sm underline"
            >
              Forgot your password?
            </Link>

            <Button
              onClick={() => handleLogin(email, password)}
              className="w-full bg-blue-600 rounded-full"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
