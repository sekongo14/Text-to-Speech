import axios from "axios";
import { CircleArrowLeft, Download, Loader, Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import logo from "../assets/img/logo.png";
import Footer from "../components/Footer.jsx";
import "./../assets/css/education.css";

function Education() {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");
  const [language, setLanguage] = useState("en-US");
  const [playLoading, setPlayLoading] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [playError, setPlayError] = useState("");
  const [downloadError, setDownloadError] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef(null);

  const schema = z.object({
    text: z.string().min(1, "Le texte ne peut pas être vide"),
    language: z.string().min(1, "Veuillez sélectionner une langue"),
    selectedVoice: z.string().min(1, "Veuillez sélectionner une voix"),
  });

  const validateForm = () => {
    try {
      schema.parse({ text, language, selectedVoice });
      return true;
    } catch (e) {
      setPlayError(e.errors[0].message);
      setDownloadError(e.errors[0].message);
      return false;
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleVoiceChange = (e) => {
    setSelectedVoice(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handlePlay = async () => {
    if (!validateForm()) return;

    setPlayLoading(true);
    setPlayError("");
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/education/text-to-speech/",
        {
          text,
          language,
          selectedVoice,
        },
        {
          responseType: "arraybuffer",
        }
      );
      const audioBlob = new Blob([response.data], { type: "audio/mp3" });
      const audioUrl = URL.createObjectURL(audioBlob);

      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.addEventListener("timeupdate", updateProgress);
      audio.addEventListener("ended", () => {
        setIsPlaying(false);
        setProgress(0);
      });

      audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Error generating speech:", error);
      setPlayError(
        "Une erreur est survenue lors de la génération du discours."
      );
    } finally {
      setPlayLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!validateForm()) return;

    setDownloadLoading(true);
    setDownloadError("");
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/education/text-to-speech/",
        {
          text,
          language,
          selectedVoice,
        },
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "speech.mp3");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error downloading speech:", error);
      setDownloadError(
        "Une erreur est survenue lors du téléchargement du discours."
      );
    } finally {
      setDownloadLoading(false);
    }
  };

  const updateProgress = () => {
    if (audioRef.current) {
      const progressValue =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progressValue);
    }
  };

  const handlePauseResume = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="Education">
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
              Bienvenue sur la section<span> Education et Formation</span>
            </h1>

            <img
              src="/src/assets/img/text-to-speech.png"
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
            {(playError || downloadError) && (
              <p className="text-red-500">{playError || downloadError}</p>
            )}

            <div className="flex justify-start mt-1">
              <button
                type="button"
                id="play"
                className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 flex items-center"
                onClick={handlePlay}
                disabled={playLoading || downloadLoading || isPlaying}
              >
                {playLoading ? (
                  <Loader className="animate-spin mr-2" />
                ) : (
                  <Play className="mr-2" />
                )}
                Lire
              </button>
              <button
                type="button"
                id="pause"
                className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2 flex items-center"
                onClick={handlePauseResume}
                disabled={playLoading || downloadLoading}
              >
                {isPlaying ? (
                  <Pause className="mr-2" />
                ) : (
                  <Play className="mr-2" />
                )}
                {isPlaying ? "Pause" : "Resume"}
              </button>
              <button
                type="button"
                id="download"
                className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
                onClick={handleDownload}
                disabled={playLoading || downloadLoading}
              >
                {downloadLoading ? (
                  <Loader className="animate-spin mr-2" />
                ) : (
                  <Download className="mr-2" />
                )}
                Télécharger
              </button>
            </div>
            {isPlaying && (
              <div className="w-full bg-gray-200 rounded-full mt-2">
                <div
                  className="bg-green-500 text-xs leading-none py-1 text-center text-white rounded-full"
                  style={{ width: `${progress}%` }}
                >
                  {Math.round(progress)}%
                </div>
              </div>
            )}
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
                <option value="">Choisir une langue</option>
                <option value="en-US">English</option>
                <option value="fr-FR">French</option>
                {/* Ajoutez d'autres langues ici */}
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
