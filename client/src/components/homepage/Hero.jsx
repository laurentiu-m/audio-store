import heroImg from "../../assets/hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="pt-[9rem] bg-white flex flex-col items-center justify-start px-10 gap-5 text-center text-black overflow-hidden sm:px-28 sm:gap-7 lg:px-[10rem] xl:px-[15rem] 2xl:px-[25rem] min-[1960px]:px-[40rem]">
      <h1 className="text-5xl font-medium sm:text-6xl lg:text-7xl">
        Listen to the <span className="text-green">amazing</span> music sound.
      </h1>

      <h3 className="text-sm font-normal sm:text-lg">
        Experience music like never before
      </h3>

      <Link to={"/shop"}>
        <button className="bg-green text-white w-[210px] h-[48px] rounded-lg text-sm font-medium shadow-lg transition-all active:opacity-75 sm:w-[250px] sm:h-[50px] sm:text-lg lg:hover:scale-105">
          Shopping Now
        </button>
      </Link>
      <div className="relative w-[100vw] h-[370px] sm:h-[450px] md:h-[400px] md:w-[690px] lg:h-[350px] lg:w-[600px] xl:h-[420px] xl:w-[720px] 2xl:w-[780px] 2xl:h-[450px]">
        <div className="absolute inset-0 top-0 left-0 flex justify-center items-center">
          <img
            src={heroImg}
            alt="Hero Image"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
