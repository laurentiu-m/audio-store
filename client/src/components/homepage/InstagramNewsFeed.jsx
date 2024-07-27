import instagramPhoto1 from "../../assets/instagram-1.jpg";
import instagramPhoto2 from "../../assets/instagram-2.jpg";
import instagramPhoto3 from "../../assets/instagram-3.jpg";
import instagramPhoto4 from "../../assets/instagram-4.jpg";

function InstagramNewsFeed() {
  return (
    <div className="h-[1300px] bg-white flex flex-col items-center justify-center px-10 gap-3 sm:h-[850px] xl:h-[650px]">
      <h2 className="uppercase font-bold text-green sm:text-lg">Newsfeed</h2>
      <h1 className="text-4xl font-medium sm:text-5xl xl:text-6xl">
        Instagram
      </h1>
      <p className="text-sm text-center sm:text-base xl:text-lg">
        Follow us on social media for more discount & promotions
      </p>
      <h3 className="text-lg font-semibold text-green sm:text-xl">
        @AudioStore_official
      </h3>

      <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 xl:grid-cols-4">
        <img
          src={instagramPhoto1}
          alt="instagram-img"
          className="w-[15rem] h-[15rem] object-cover 2xl:w-[17rem] 2xl:h-[17rem]"
        />
        <img
          src={instagramPhoto2}
          alt="instagram-img"
          className="w-[15rem] h-[15rem] object-cover 2xl:w-[17rem] 2xl:h-[17rem]"
        />
        <img
          src={instagramPhoto3}
          alt="instagram-img"
          className="w-[15rem] h-[15rem] object-cover 2xl:w-[17rem] 2xl:h-[17rem]"
        />
        <img
          src={instagramPhoto4}
          alt="instagram-img"
          className="w-[15rem] h-[15rem] object-cover 2xl:w-[17rem] 2xl:h-[17rem]"
        />
      </div>
    </div>
  );
}

export default InstagramNewsFeed;
