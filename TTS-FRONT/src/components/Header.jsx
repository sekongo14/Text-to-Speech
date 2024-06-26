import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { initializeMobileNavToggle } from "./../assets/js/main.js";
const Header = () => {
  useEffect(() => {
    initializeMobileNavToggle();
  }, []);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center justify-center sm:justify-start">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="QuickStart Logo"
                className="h-6 w-6 mr-2 sm:h-10 sm:w-auto"
              />
              <h1 className="text-xl font-bold text-gray-900 sm:text-sm">
                SpeechSync
              </h1>
            </Link>
          </div>

          <div className="flex items-center">
            <Link
              to={"/connexion"}
              className="bg-[#569EB5] text-white hover:bg-gray-200 px-4 py-2 text-sm font-medium rounded-md ml-4 sm:ml-6"
            >
              Connexion
            </Link>
            <Link
              to={"/inscription"}
              className="bg-[#569EB5] text-white hover:bg-gray-200 px-4 py-2 text-sm font-medium rounded-md ml-4 sm:ml-6"
            >
              Inscription
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
