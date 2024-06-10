import Cookies from "js-cookie";
import { CircleArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Modal from "../components/Modal";

function Choix() {
  const [showCard, setShowCard] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  console.log(Cookies.get("accessToken"));
  console.log(Cookies.get("refreshToken"));
  return (
    <div>
      <header
        id="header"
        className="header flex items-center fixed top-0 w-full bg-white shadow-md z-50 transition duration-300 ease-in-out py-4 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <Link to="/" className="logo d-flex align-items-center me-auto">
            <img src={logo} alt="QuickStart Logo" />
            <h1 className="sitename">SpeechSync</h1>
          </Link>

          <div className="mr-5">
            <Link className="btn-getstarted flex mr-5 flex" to="/">
              <CircleArrowLeft className="me-1" />
              Retour
            </Link>
          </div>
          <div
            onMouseEnter={() => setShowCard(true)}
            onMouseLeave={() => setShowCard(false)}
            className="relative"
          >
            <div
              className={`card ${
                showCard ? "block" : "hidden"
              } absolute right-0 mt-4 p-2 rounded-lg shadow-lg`}
            >
              <Link
                to="/profile"
                className="mb-2 block text-[#569EB5] hover:text-green-700"
              >
                Profile
              </Link>
              <button
                onClick={toggle}
                className="block text-[#569EB5] hover:text-green-700"
              >
                Déconnexion
              </button>
            </div>

            <button className="avatar focus:outline-none">
              <img
                className="w-10 h-10 rounded-full"
                src="https://i.pravatar.cc/300"
                alt="Profile"
              />
            </button>
          </div>
        </div>
      </header>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Choisissez une option</h2>

          <Link
            className="inline-block mr-4 rounded bg-[#569EB5] px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#569EB5]"
            to={"/education"}
          >
            Education
          </Link>

          <Link
            className="inline-block mr-4 rounded bg-[#569EB5] px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[5#69EB5]"
            to={"/marketing"}
          >
            Marketing
          </Link>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={toggle}>
        <h3 className="text-lg font-bold mb-4">
          Voulez-vous vraiment vous déconnecter?
        </h3>
      </Modal>
    </div>
  );
}

export default Choix;
