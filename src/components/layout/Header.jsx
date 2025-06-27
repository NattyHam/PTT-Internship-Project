import logo2 from "../../assets/logo2.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-primary-dark h-16 shadow flex items-center justify-between px-6 z-10">

      <div className="flex items-center gap-2">
        <img src={logo2} alt="PTT Logo" className="h-16 ml-10" />

      </div>

      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
          U
        </div>
      </div>
    </header>
  );
};

export default Header;
