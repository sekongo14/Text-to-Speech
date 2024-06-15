import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { initializeMobileNavToggle } from "./../assets/js/main.js";

const Header = () => {
  useEffect(() => {
    initializeMobileNavToggle();
  }, []);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link to="/" className="logo d-flex align-items-center me-auto">
          <img src={logo} alt="QuickStart Logo" />
          <h1 className="sitename">QuickStart</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

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
