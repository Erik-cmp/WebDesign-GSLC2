import { FaCheck } from "react-icons/fa";

const Why = () => {
  return (
    <div className="flex justify-center w-full h-auto bg-neutral-900">
      <div className="text-center">
        <h1 className="text-5xl text-white font-bold pt-20">Why Go-Tunes?</h1>

        <div className="bg-neutral-800 rounded-lg shadow-lg p-12 mt-8">
          <ul className="text-white text-lg font-semibold list-none flex flex-col gap-y-4 text-start">
            <li>
              <FaCheck className="inline mr-2" /> Ad-Free Listening Experience
            </li>
            <li>
              <FaCheck className="inline mr-2" /> Upload Any Music You Love
            </li>
            <li>
              <FaCheck className="inline mr-2" /> High-Quality Audio for Premium
              Sound
            </li>
            <li>
              <FaCheck className="inline mr-2" /> Smart Playlists Tailored to
              Your Taste
            </li>
            <li>
              <FaCheck className="inline mr-2" /> Cross-Platform Sync for
              Seamless Experience
            </li>
            <li>
              <FaCheck className="inline mr-2" /> Social Sharing of Your
              Favorite Music
            </li>
          </ul>
        </div>
        <div className="pt-12 pb-20">
          <a
            href="https://go-tunes.vercel.app"
            target="blank"
            className="bg-blue-800 text-white py-4 px-12 rounded-full mt-8 hover:opacity-75 transition text-xl font-semibold w-[240px]"
          >
            Subscribe for only $3.99 a month!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Why;
