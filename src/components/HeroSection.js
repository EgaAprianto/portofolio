import pict from '../image/pict.png'
const HeroSection = () => {
    return(
        <>
            <div id="home" className="flex flex-row justify-between w-full h-[500px] bg-gray-800 overflow-hidden mt-[60px]">
                <div className="flex flex-col w-[500px] place-self-center mx-20">
                    <p className="text-sm font-thin text-white">HELLO, Nice to meet you</p>
                    <h1 className="font-bold text-5xl text-white">
                        I'm <a className="text-blue-400">Ega</a> Aprianto
                    </h1>
                    <p className="w-[500px] text-white py-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    </p>
                    <button className="w-[150px] h-[40px] hover:w-[160px] hover:h-[50px] rounded-full mt-8 bg-gray-200">
                        <a className="text-gray-800 font-medium">
                        Download CV
                        </a>
                    </button>
                </div>
                <div className="relative mr-20 place-self-center rounded-full bg-blue-400 h-[400px] w-[400px] flex p-10">
                    <img src={pict} 
                    alt="Ega"
                    className='w-[400px] absolute -top-10 right-1 left-3'/>
                    <div className='absolute top-20 -right-2 w-[100px] h-[20px] bg-white rounded-full'></div>
                    <div className='absolute top-15 -left-2 w-[120px] h-[10px] bg-white rounded-full'></div>
                    <div className='absolute top-14 -left-4 w-[200px] h-[10px] bg-white rounded-full'></div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;