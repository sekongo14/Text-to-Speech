import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { initializeMobileNavToggle } from "./../assets/js/main.js";

const Header = () => {
  useEffect(() => {
    initializeMobileNavToggle();
  }, []);

  return (
    <header
    id="header"
      className="header flex items-center fixed top-0 w-full bg-white x
      shadow-md z-50 transition duration-300 ease-in-out py-4 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link to="/" className="logo d-flex align-items-center me-auto">
          <img src={logo} alt="QuickStart Logo" />
          <h1 className="sitename">SpeechSync</h1>
        </Link>

        <Link className="btn-getstarted" to={"/inscription"}>
          Inscription
        </Link>
        <Link className="btn-getstarted" to={"/connexion"}>
          Connexion
        </Link>
      </div>
    </header>
  );
};

export default Header;
