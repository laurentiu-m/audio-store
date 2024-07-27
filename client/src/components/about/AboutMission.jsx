function AboutMission() {
  return (
    <section className="bg-green h-[250px] grid grid-cols-1 lg:h-[300px]">
      <div className="w-[75%] flex flex-col m-auto gap-5 text-white sm:w-[30rem] lg:w-[45rem]">
        <h2 className="text-4xl font-semibold text-center sm:text-5xl lg:text-6xl">
          Our Mission
        </h2>
        <p className="text-justify text-sm sm:text-base lg:text-lg">
          Our mission is to provide top-quality audio products that enhance your
          listening experience, whether you&apos;re an audiophile, a musician,
          or just someone who loves great sound.
        </p>
      </div>
    </section>
  );
}

export default AboutMission;
