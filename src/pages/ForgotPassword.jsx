import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { clearAllUserErrors } from "@/store/slices/userSlice";
import { forgotPassword } from "@/store/slices/forgotResetPasswordSlice";
import { toast } from "react-toastify";
import SpecialLoadingButton from "./sub-components/SpecialLoadingButton";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { loading, error, message } = useSelector(
    (state) => state.forgotPassword
  );
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleForgotPassword = (email) => {
    dispatch(forgotPassword(email));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigateTo("/");
    }
    if (message !== null) {
      toast.success(message);
    }
  }, [dispatch, isAuthenticated, error, loading]);

  return (
    <div className="container  mx-auto   flex flex-col lg:flex-row justify-center gap-10 text-gray-500 lg: pt-10 lg:py-32 ">
      <div className="flex justify-center items-center ">
        <img src="/forgot.png" alt="login" className="h-40 lg:h-72" />
      </div>
      <div className=" flex items-center justify-center  md:mx-auto lg:mx-0 rounded-xl p-6 lg:p-12 md:p-16 my-auto md:w-96 lg:w-auto shadow-2xl">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-600 ">
              Forgot Password
            </h1>
            <p className="pb-2">
              Enter your email to request for reset password
            </p>
          </div>
          <div className="grid gap-4 lg:py-10">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Link
                  to="/login"
                  className="ml-auto inline-block text-sm underline"
                >
                  Remember your password?
                </Link>
              </div>
            </div>
            {!loading ? (
              <Button
                onClick={() => handleForgotPassword(email)}
                className="w-full"
              >
                Forgot Password
              </Button>
            ) : (
              <SpecialLoadingButton content={"Requesting"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
