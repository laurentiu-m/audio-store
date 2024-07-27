import { Link } from "react-router-dom";

function AboutContact() {
  return (
    <section className="w-[80%] h-[250px] flex flex-col justify-center items-center m-auto gap-5 sm:w-[30rem] lg:w-[45rem]">
      <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
        Contact Us
      </h1>
      <p className="text-justify lg:text-lg">
        If you have any questions or need further information, feel free to
        reach out to us. We&apos;re here to help!
      </p>
      <Link to="/contact">
        <button className="px-[2rem] py-[1rem] font-medium bg-green text-white transition-all rounded-lg lg:text-lg lg:hover:scale-105 lg:active:opacity-75">
          Go to Contact Page
        </button>
      </Link>
    </section>
  );
}

export default AboutContact;
