import { Button } from '@/components/ui/button';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from 'postcss';
import React, { useState } from 'react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Register = () => {
    const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="container  mx-auto h-screen  flex flex-col lg:flex-row justify-center gap-10 text-gray-500 lg:pt-10 lg:py-12 ">
      {/* <div className="flex justify-center items-center">
        <img src="/login.png" alt="login" className="h-40 lg:h-72" />
      </div> */}
      <div className=" flex  justify-center  md:mx-auto lg:mx-0 rounded-xl p-6 lg:p-12 md:p-16 my-auto md:w-96 lg:w-auto shadow-2xl">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-600 ">
              Register
            </h1>
            <p className="pb-2">
              Enter your email below to login to your account
            </p>
            <div className="grid gap-4 lg:py-10 relative">
              <div className="grid gap-2 text-left">
                <label htmlFor="email" className="text-lg font-semibold">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Dushyant das manikpuri"
                  // value={email}
                  className="rounded-full active:outline-none  px-2 py-1"
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email" className="text-lg font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="portFolio@example.com"
                  // value={email}
                  className="rounded-full active:outline-none  px-2 py-1"
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email" className="text-lg font-semibold">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="+91 93020000000"
                  // value={email}
                  className="rounded-full active:outline-none  px-2 py-1"
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email" className="text-lg font-semibold">
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    id="password"
                    type={showPassword ? "password" : "text"}
                    placeholder="********"
                    // value={email}
                    className="rounded-full active:outline-none  px-2 py-1 w-full"
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div
                    className="size-4 absolute top-2 right-4 rounded-full"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                  </div>
                </div>
                <label htmlFor="email" className="text-lg font-semibold">
                 Re-enter Password
                </label>
                <div className="relative w-full">
                  <input
                    id="password"
                    type={showPassword ? "password" : "text"}
                    placeholder="********"
                    // value={email}
                    className="rounded-full active:outline-none  px-2 py-1 w-full"
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div
                    className="size-4 absolute top-2 right-4 rounded-full"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                  </div>
                </div>
                <Link to="/" className="ml-auto inline-block text-sm underline">
                  I have an accound
                </Link>

                <button
                  // onClick={() => handleLogin(email, password)}
                  className="w-full bg-gray-500 text-gray-800 font-bold rounded-full py-2 "
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register