import team1 from "../../assets/team-1.jpg";
import team2 from "../../assets/team-2.jpg";
import team3 from "../../assets/team-3.jpg";

function AboutTeam() {
  return (
    <section className="w-[80%] h-[900px] flex flex-col m-auto items-center justify-center gap-14 sm:h-[1050px] lg:h-[550px] lg:gap-24">
      <h1 className="text-4xl font-semibold text-center sm:text-5xl lg:text-6xl">
        Meet the Team
      </h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16 xl:gap-24">
        <div className="flex flex-col items-center gap-1">
          <img
            src={team1}
            alt="person-img"
            className="w-[12rem] h-[12rem] object-cover rounded-full sm:w-[14rem] sm:h-[14rem]"
          />
          <h3 className="font-semibold sm:text-lg">Taylor Smith</h3>
          <p className="text-sm sm:text-base">Chief Technology Officer</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img
            src={team2}
            alt="person-img"
            className="w-[12rem] h-[12rem] object-cover rounded-full sm:w-[14rem] sm:h-[14rem]"
          />
          <h3 className="font-semibold sm:text-lg">Alex Johnson</h3>
          <p className="text-sm sm:text-base">Founder & CEO</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img
            src={team3}
            alt="person-img"
            className="w-[12rem] h-[12rem] object-cover rounded-full sm:w-[14rem] sm:h-[14rem]"
          />
          <h3 className="font-semibold sm:text-lg">Emily Davis</h3>
          <p className="text-sm sm:text-base">Head of Customer Relations</p>
        </div>
      </div>
    </section>
  );
}

export default AboutTeam;
