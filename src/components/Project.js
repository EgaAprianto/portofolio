import React from "react";
import emciar from "../image/emciar.jpeg";
import dapp from "../image/dapp.jpeg";
import kerdjana from "../image/kerdjana.jpeg";
const Project = () => {
  return (
    <>
      <div
        id="projek"
        className="relative flex flex-col w-full h-[600px] bg-gray-800  p-20"
      >
        <div className="w-full items-center flex justify-center">
          <div className="border-blue-400 border-b-2 w-[350px] pb-1 ">
            <h1 className="text-white text-3xl font-bold text-center">
              WORKS
            </h1>
          </div>
        </div>
        <div className="flex flex-row px-20 gap-20">
        <div className="flex flex-col w-[500px]">
        <h1 className="text-2xl font-bold text-white mt-10">
            Lorem ipsum dolor sit amet, consectetur 
            </h1>
          <h1 className="text-sm font-thin text-white mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h1>
        <div className="flex flex-row gap-4 -mt-4">
        <h1 className="text-6xl text-blue-400 font-bold mt-10">
            1
        </h1>
        <p className="place-self-center mt-12 font-semibold text-white w-[100px]">
            Month of Experience
        </p>
        <div className="flex flex-row gap-4">
        <h1 className="text-6xl text-blue-400 font-bold mt-10">
            4
        </h1>
        <p className="place-self-center mt-12 font-semibold text-white w-[100px]">
            Satisfied Clients
        </p>
        </div>
        </div>
        
        </div>
        <div className="flex flex-col gap-4 w-[700px]">
            <h1 className="text-2xl font-bold text-white mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor, sed do eiusmod tempor
            </h1>
            <p className="text-sm font-thin text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
            </p>
        </div>
        </div>
        <div className="absolute top-[400px] right-[50px] flex flex-row mt-8 gap-8">
          <a
            href="https://www.emciar.com"
            className="relative rounded-xl bg-blue-400 hover:h-[430px] hover:w-[370px] h-[400px] w-[350px] flex p-10 overflow-hidden"
          >
            <img
              src={emciar}
              alt="Ega"
              className="absolute top-0 right-0 bottom-0 left-0 object-cover"
            />
          </a>
          <a
            href="https://d-app-theta.vercel.app/"
            className="relative rounded-xl bg-blue-400 hover:h-[430px] hover:w-[370px] h-[400px] w-[350px] flex p-10 overflow-hidden"
          >
            <img
              src={dapp}
              alt="Ega"
              className="absolute top-0 right-0 bottom-0 left-0 object-cover"
            />
          </a>
          <a
            href="https://kerdjana-project.netlify.app/"
            className="relative rounded-xl bg-blue-400 hover:h-[430px] hover:w-[370px] h-[400px] w-[350px] flex p-10 overflow-hidden"
          >
            <img
              src={kerdjana}
              alt="Ega"
              className="absolute top-0 right-0 bottom-0 left-0 object-cover"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
