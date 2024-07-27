import { Link } from "react-router-dom";

function Complete() {
  return (
    <div className="pt-[9rem] pb-10 px-7 bg-white flex flex-col items-center">
      <h1 className="text-5xl font-medium sm:text-6xl">Complete</h1>

      <div className="flex flex-col items-center justify-center text-center h-[500px] gap-2 sm:w-[35rem] lg:h-[600px] lg:w-[40rem]">
        <h2 className="text-lg font-medium text-green sm:text-2xl lg:text-3xl">
          Thank You!
        </h2>
        <h1 className="text-3xl font-medium sm:text-5xl lg:text-6xl">
          Your order has been received
        </h1>
        <Link to={"/shop"}>
          <button className="bg-green text-white mt-5 w-[10rem] h-[2.5rem] rounded-md font-medium transition-all hover:bg-darkGreen active:opacity-75 lg:w-[12rem] lg:h-[3rem] lg:text-lg">
            Shop more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Complete;
