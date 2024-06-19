import { CircleArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Footer from "../components/Footer.jsx";
import TextToSpeech from "../components/tts_form.jsx";
import "./../assets/css/marketing.css";

function Marketing() {
  return (
    <>
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

            <Link className="btn-getstarted flex" to={"/choix"}>
              <CircleArrowLeft className="me-1" />
              <span className="mt-1">Retour</span>
            </Link>
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
      </div>
    </>
  );
}

export default Marketing;
