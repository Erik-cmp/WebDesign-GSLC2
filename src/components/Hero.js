import { ImHeadphones } from "react-icons/im";

const Hero = () => {
  return (  
    <div className="flex w-full h-40vh bg-white px-96 justify-between py-20">
      <div className="flex w-[65%] flex-col">
        <h1 className="font-bold text-6xl text-blue-800">More than just a music player.</h1>
        <p className="text-black text-lg mt-8 font-medium">
          Elevate your musical journey with our innovative platform. From handpicked playlists to personalized recommendations, our music player offers an immersive experience tailored just for you. Rediscover the joy of music exploration and embark on a sonic adventure like never before.
        </p>
        <a href="https://go-tunes.vercel.app" target="blank" className="bg-blue-800 text-white py-4 px-12 rounded-full mt-8 hover:opacity-75 transition text-xl font-semibold w-[240px]">Take Me There!</a>
      </div>
      <div className="flex w-[30%] h-[40vh] justify-center items-center shadow-md rounded-xl">
        <ImHeadphones size={240} className="text-blue-800"/>
      </div>
    </div>
  );
}

export default Hero;
