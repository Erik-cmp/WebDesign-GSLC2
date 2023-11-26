import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white text-black py-6 px-96">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-center items-center gap-x-2">
          <a href="/">
            <img src="../logo.png" className="h-12" alt="Go-Tunes Logo" />
          </a>
          <a href="/" className="text-3xl text-blue-800 font-bold">
            Go-Tunes
          </a>
        </div>

        <div className="flex gap-4">
          <a href="#" className="text-xl hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-xl hover:underline">
            Contact
          </a>
          <a href="#" className="text-xl hover:underline">
            Careers
          </a>
        </div>
      </div>

      <div className="flex justify-center mt-4 gap-4">
        <a href="#" className="hover:text-blue-800">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="hover:text-blue-800">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="hover:text-blue-800">
          <FaInstagram size={24} />
        </a>
      </div>

      <div className="text-center mt-4">
        <p className="text-gray-500 text-sm">
          &copy; 2023 Go-Tunes. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
