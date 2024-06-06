import { CircleArrowLeft, Download, Play } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Footer from "../components/Footer.jsx";
import "./../assets/css/education.css";

function Education() {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");
  const [language, setLanguage] = useState("en-US");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleVoiceChange = (e) => {
    setSelectedVoice(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      text,
      language,
      selectedVoice,
    };
    console.log(formData);
  };

  return (
    <div className="Education">
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <Link to="/" className="logo d-flex align-items-center me-auto">
            <img src={logo} alt="QuickStart Logo" />
            <h1 className="sitename">SpeechSync</h1>
          </Link>

          <Link className="btn-getstarted  flex" to={"/choix"}>
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
              Bienvenue sur la section<span> Education et Formation</span>
            </h1>

            <img
              src="/src/assets/img/text-to-speech.png" // Utilisez une image représentative
              className="img-fluid hero-img"
              alt="Service de conversion de texte en discours"
              data-aos="zoom-out"
              data-aos-delay="300"
            />
          </div>
        </div>
      </section>
      <div className="container">
        <h1>
          Text to Speech <span>Convertisseur</span>
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 mb-1 lg:mb-0 lg:pr-2">
            <textarea
              className="w-full h-48 bg-green-500 text-white text-base p-1 rounded-md"
              placeholder="Écrivez quelque chose ici...."
              onChange={handleTextChange}
              value={text}
            ></textarea>

            <div className="flex justify-start mt-1">
              <button
                type="button"
                id="play"
                className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
              >
                <Play />
                Lire
              </button>
              <button
                type="button"
                id="download"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                <Download className="mr-2" />
                Télécharger
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-2">
            <div className="w-full md:w-1/2 lg:w-auto mb-4 md:mb-0">
              <label htmlFor="language" className="block text-gray-700">
                Sélectionnez la langue:
              </label>
              <select
                id="language"
                value={language}
                onChange={handleLanguageChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-green-400"
              >
                <option value="">Choisir une voix</option>
                <option value="Male">Male</option>

                <option value="Female">Female</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 lg:w-auto">
              <label htmlFor="voice" className="block text-gray-700">
                Sélectionnez la voix:
              </label>
              <select
                id="voice"
                value={selectedVoice}
                onChange={handleVoiceChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-green-400"
              >
                <option value="">Choisir une voix</option>
                <option value="Male">Male</option>

                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Education;
