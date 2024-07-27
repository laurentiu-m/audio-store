import ValuesElement from "./ValuesElement";

function Values() {
  return (
    <div className="bg-green text-black w-full h-[550px] flex flex-col justify-center px-7 lg:h-[450px]">
      <div className="grid grid-cols-2 gap-3 min-w-[60%] items-center justify-center m-auto sm:gap-4 sm:min-w-[0%] lg:grid-cols-4 xl:gap-7">
        <ValuesElement />
      </div>
    </div>
  );
}

export default Values;
