import { useEffect, useState } from "react";
import "./../assets/css/marketing.css";

const TextToSpeech = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");
  const [language, setLanguage] = useState("en-US");
  const [videoFile, setVideoFile] = useState(null);

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
    setText(e.target.value);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      text,
      language,
      selectedVoice,
      videoFile,
    };
    onSubmit(formData);
  };

  return (
    <div className="tts-container">
      <h2>Text to Speech Form</h2>
      <form className="tts-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Enter text:</label>
          <textarea id="text" value={text} onChange={handleTextChange} />
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
