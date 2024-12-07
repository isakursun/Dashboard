import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center  w-full bg-no-repeat bg-cover bg-center "
      style={{
        backgroundImage: "url('./bg.png')",
        width: "100vw",
        minHeight: "100vh",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center  w-3/4 h-fit my-2 mb-2 ">
        <div 
        className=" bg-[#06A67E] flex items-center justify-center rounded-l-lg h-full ">
          <div className="flex  flex-col items-center gap-10 p-6">
            <div className="text-white text-[26px] font-bold text-center ">
              Welcome Back!
            </div>
            <p className="text-white text-[12px] text-center">
              Welcome Back! To keep connected with us plase login with your
              personal info SIGN IN
            </p>
            <div className="">
              <button className="text-white border px-12 py-2 rounded-full text-[12px]">
                SIGN IN
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#FFFFFF] flex items-center justify-center rounded-r-lg p-6">
          <div className="flex flex-col gap-6 items-center ">
            <div>
              <h1 className="font-semibold text-2xl text-[#06A67E] ">
                Create Account
              </h1>
            </div>

            <div className="flex gap-5">
              <div className=" border-2 p-2 rounded-full">
                <FaTwitter className="opacity-50" />
              </div>
              <div className="border-2 p-2 rounded-full">
                <FaFacebookF className="opacity-50" />
              </div>
              <div className="border-2 p-2 rounded-full">
                <FaLinkedinIn className="opacity-50" />
              </div>
            </div>

            <p className="text-gray-400">or use your e mail for resigtration</p>

            <div className="flex flex-col gap-2">
            
              <div className="flex gap-2 items-center justify-start bg-[#F4F8F5] w-80 p-3 px-6 font-semibold text-sm">
                
                <CiMail size={20} className="text-gray-500" />
                <input
                  className="outline-none bg-transparent"
                  type="email"
                  placeholder="Mail"
                />
              </div>
              <div className=" flex gap-2 items-center justify-start bg-[#F4F8F5] w-80 p-3 px-6 font-semibold text-sm">
                <RiLockPasswordLine size={20} className="text-gray-500" />
                <input
                  className="outline-none bg-transparent"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button onClick={()=>navigate('/')} className="bg-[#06A67E] text-white px-12 py-2 rounded-full">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
