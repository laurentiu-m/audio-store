import Hero from "../components/homepage/Hero";
import BestSeller from "../components/homepage/BestSeller";
import Values from "../components/homepage/Values";
import Newsletter from "../components/homepage/Newsletter";
import InstagramNewsFeed from "../components/homepage/InstagramNewsFeed";

function Home() {
  return (
    <>
      <Hero />
      <Values />
      <BestSeller />
      <Newsletter />
      <InstagramNewsFeed />
    </>
  );
}

export default Home;
