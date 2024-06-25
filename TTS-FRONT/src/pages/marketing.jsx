import { CircleArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import DialogConfirm from "../components/Dialog.jsx";
import Footer from "../components/Footer.jsx";
import TextToSpeech from "../components/tts_form.jsx";
import useAuthStore from "../utils/userStore.jsx";
import "./../assets/css/marketing.css";

function Marketing() {
  const { isLoggedIn, user, logout } = useAuthStore((state) => state);
  const [showCard, setShowCard] = useState(false);
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);

  console.log("User data:", user);

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  const handleLogout = () => {
    logout();
    navigate("/connexion");
  };
  return (
    <>
      <div>
        <header
          id="header"
          className="header flex items-center fixed top-0 w-full bg-white shadow-md z-50 transition duration-300 ease-in-out py-4 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
        >
          <div className="container-fluid container-xl position-relative flex justify-between items-center">
            <div>
              <Link to="/" className="logo d-flex align-items-center me-auto">
                <img src={logo} alt="QuickStart Logo" />
                <h1 className="sitename">SpeechSync</h1>
              </Link>
            </div>

            <div className="d-flex flex-row">
              <div className="mr-2">
                <Link className="btn-getstarted flex mr-5 flex" to="/choix">
                  <CircleArrowLeft className="me-1" />
                  Retour
                </Link>
              </div>
              <div className="mr-5">
                <Link className="btn-getstarted flex mr-5 flex" to="/education">
                  education
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
                    onClick={() => setDialogOpen(true)}
                    className="block text-[#569EB5] hover:text-green-700"
                  >
                    Déconnexion
                  </button>
                </div>

                <button className="avatar focus:outline-none">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${user.email}`}
                    alt="Profile"
                  />
                </button>
              </div>
            </div>
          </div>
        </header>

        <section id="hero" className="hero section">
          <div className="hero-bg">
            <img src="/src/assets/img/hero-bg-light.webp" alt="" />
          </div>
          <div className="container text-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 data-aos="fade-up">
                Bienvenue sur la section<span> Marketing Digitale</span>
              </h1>

              <img
                src="./src/assets/img/marketing.jpg"
                className="img-fluid hero-img"
                alt="Service de conversion de texte en discours"
                data-aos="zoom-out"
                data-aos-delay="300"
              />
            </div>
          </div>
        </section>
        <TextToSpeech />
        <Footer />

        <DialogConfirm
          isOpen={dialogOpen}
          onClose={() => setDialogOpen(false)}
          onConfirm={handleLogout}
          message="Êtes-vous sûr de vouloir vous déconnecter ?"
        />
      </div>
    </>
  );
}

export default Marketing;
