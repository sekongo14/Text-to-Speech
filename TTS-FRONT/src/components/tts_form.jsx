import axios from "axios";
import { useEffect, useState } from "react";
import "./../assets/css/marketing.css";

const MAX_TEXT_LENGTH = 500000;

const TextToSpeech = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");
  const [language, setLanguage] = useState("en-US");
  const [videoFile, setVideoFile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const synth = window.speechSynthesis;
    const populateVoices = () => {
      const voices = synth.getVoices();
      setVoices(voices);
      if (voices.length > 0) {
        setSelectedVoice(voices[0].name);
      }
    };
    populateVoices();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = populateVoices;
    }
  }, []);

  const handleTextChange = (e) => {
    if (e.target.value.length > MAX_TEXT_LENGTH) {
      setError(`Le texte ne peut pas dépasser ${MAX_TEXT_LENGTH} caractères.`);
    } else {
      setError("");
      setText(e.target.value);
    }
  };

  const handleVoiceChange = (e) => {
    setSelectedVoice(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleVideoChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.length > MAX_TEXT_LENGTH) {
      setError(`Le texte ne peut pas dépasser ${MAX_TEXT_LENGTH} caractères.`);
      return;
    }
    if (!videoFile) {
      setError("Veuillez télécharger un fichier vidéo.");
      return;
    }

    const formData = new FormData();
    formData.append("text", text);
    formData.append("language", language);
    formData.append("selectedVoice", selectedVoice);
    formData.append("videoFile", videoFile);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/marketing/api/marketting/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "synced_video.mp4");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error processing the video:", error);
    }
  };

  return (
    <div className="tts-container">
      <h2>Text to Speech Form</h2>
      <form className="tts-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Enter text:</label>
          <textarea id="text" value={text} onChange={handleTextChange} />
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div>
          <label htmlFor="language">Select Language:</label>
          <select
            id="language"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="en-US">English (US)</option>
            <option value="fr-FR">French</option>
            <option value="es-ES">Spanish</option>
            <option value="de-DE">German</option>
          </select>
        </div>
        <div>
          <label htmlFor="voice">Select Voice:</label>
          <select id="voice" value={selectedVoice} onChange={handleVoiceChange}>
            {voices.map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="video">Upload video:</label>
          <input
            type="file"
            id="video"
            accept="video/*"
            onChange={handleVideoChange}
          />
        </div>
        <button type="submit" className="bg-[#569EB5] text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TextToSpeech;
