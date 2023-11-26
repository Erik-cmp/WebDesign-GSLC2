const Navbar = () => {
  return (
    <div className="flex w-full h-20 bg-white drop-shadow px-96 justify-between">
      <div className="flex justify-center items-center gap-x-2">
        <a href="/">
          <img src="../logo.png" className="h-12" alt="Go-Tunes Logo" />
        </a>
        <a href="/" className="text-3xl text-blue-800 font-bold">
          Go-Tunes
        </a>
      </div>
      <div className="flex gap-x-12 justify-center items-center">
        <a
          className="text-neutral-800 hover:text-blue-800 hover:underline transition text-xl font-semibold"
          href="#"
        >
          Premium
        </a>
        <a
          className="text-neutral-800 hover:text-blue-800 hover:underline transition text-xl font-semibold"
          href="#"
        >
          About
        </a>
        <a
          className="text-neutral-800 hover:text-blue-800 hover:underline transition text-xl font-semibold"
          href="#"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
