import AboutHeader from "../components/about/AboutHeader";
import AboutMission from "../components/about/AboutMission";
import AboutTeam from "../components/about/AboutTeam";
import AboutContact from "../components/about/AboutContact";

function About() {
  return (
    <div className="pt-[9rem] pb-10 bg-white flex flex-col gap-16">
      <AboutHeader />
      <AboutMission />
      <AboutTeam />
      <AboutContact />
    </div>
  );
}

export default About;
