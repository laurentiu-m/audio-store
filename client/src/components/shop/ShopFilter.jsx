function ShopFilter() {
  return (
    <div className="flex flex-row w-full items-center justify-center gap-4">
      <button className="bg-green text-white w-[30%] h-[2.5rem] font-medium rounded-md transition-all hover:bg-darkGreen active:opacity-75 min-[375px]:w-[5rem] sm:text-lg sm:w-[8rem] sm:h-[3rem]">
        Filter
      </button>
      <input
        type="text"
        placeholder="Search"
        className="w-[70%] h-[2.5rem] border border-green rounded-md px-3 placeholder:text-black placeholder:font-medium focus:outline-green min-[375px]:w-[64%] sm:h-[3rem] sm:text-lg md:w-[30rem] md:px-4 lg:w-[40rem]"
      />
    </div>
  );
}

export default ShopFilter;
