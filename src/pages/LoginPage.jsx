import React from "react";

const LoginPage = () => {
  return (
    <div
      className=" h-full w-full bg-no-repeat bg-cover bg-center "
      style={{ backgroundImage: "url('./bg.png')" , width:"100%", height:"100%",

      }}
    >
      <div className="h-screen items-center justify-center px-[10%] py-[7%] flex flex-col md:flex-row ">
        <div className="w-[40%] h-[78%] bg-blue-500 flex items-center justify-center">
          Sol İçerik
        </div>

        <div class="w-[71%] h-[78%] bg-green-500 flex items-center justify-center ">
          Sağ İçerik
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
