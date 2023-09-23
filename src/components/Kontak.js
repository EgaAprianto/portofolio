import React from "react";
import phone from "../image/phone.png"
import mail from "../image/mail.png"
import github from "../image/github.png"

const Kontak = () => {
  return (
    <>
      <div
        id="kontak"
        className="flex flex-col items-center pt-20 w-full h-[450px] bg-gray-900 overflow-hidden "
      >
        <div className="border-blue-400 border-b-2 w-[350px] pb-1">
          <h1 className="text-white text-3xl font-bold text-center">CONTACT</h1>
        </div>
        <div className="flex flex-row gap-28 mt-20">
          <div className="flex flex-col gap-4">
        <img
              src={phone}
              alt="Ega"
              className="w-[50px] h-[60px] place-self-center items-center"
            />
            <div className="text-center">
            <h1 className="text-xl font-bold text-white">
              Phone
            </h1>
            <p className="text-blue-400">
              081395364993
            </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
        <img
              src={mail}
              alt="Ega"
              className="w-[80px] h-[60px] place-self-center"
            />
            <div className="text-center">
            <h1 className="text-xl font-bold text-white">
              Mail
            </h1>
            <p className="text-blue-400">
              egaaprianto8@gmail.com
            </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
        <img
              src={github}
              alt="Ega"
              className="w-[60px] h-[60px] place-self-center"
            />
            <div className="text-center">
            <h1 className="text-xl font-bold text-white">
              Github
            </h1>
            <p className="text-blue-400">
              EgaAprianto
            </p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Kontak;
