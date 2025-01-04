import React from "react";
import Layout from "../Components/Layout";
import { reportData } from "../utils/constants";

const MainPage = () => {
  const selectedMenu = ["Didiyos", ">", "Menu", ">", "Dashboard"];
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-3xl font-semibold text-[#9B9895] mb-6">
          Dashboard
        </h1>
        <div className="flex gap-3  text-[#9B9895] text-lg font-semibold ml-3">
          {selectedMenu.map((item, i) => (
            <p key={i}>{item} </p>
          ))}
        </div>

        <div className="mt-6 grid xl:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-3  ">
          {reportData.map((data, i) => (
            <div className="bg-[#fff] p-4 rounded-md ">
              <h1>{data.title}</h1>
              <p>{data.value}</p>
              <div className="flex gap-2">
                <span>{data.percent}</span>
                <span>{data.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
    
  );
};

export default MainPage;
