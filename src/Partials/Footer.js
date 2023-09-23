const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-[350px] bg-gray-800">
        <div className="flex-col items-center text-center">
          <h3 className="text-blue-400 text-sm font-medium ">
            ui / ux / visual design
          </h3>
          <h1 className="text-white text-2xl font-bold ">EGA APRIANTO</h1>
        </div>
        <p className="text-sm text-gray-200  text-center w-[700px] my-4">
          labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum
          dolor sit amet, consectetur adipiscing
        </p>
        <div className="flex flex-row">
          <button
            a href="#kontak"
            className=" h-[40px] bg-blue-400 rounded-sm hover:bg-blue-500"
          >
            <a href="#kontak" className="place-self-center text-white p-4">Contact</a>
          </button>
        </div>
      </div>
    </>
  );
};
export default Footer;
