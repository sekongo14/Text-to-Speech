import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./../assets/css/inscription.css";

function Inscription() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/account/api/register/', formData)
      .then(response => {
        console.log(response.data);
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="inscription w-[100%] h-[100vh] bg-gray-300">
      <div className="w-full h-full flex justify-center items-center rounded-lg">
        <div className="flex container w-[55rem] h-[30rem] shadow-xl bg-gray-50 rounded-lg">
          <div className="flex-1 flex justify-center items-center">
            <div className="w-[95%] h-[95%] mx-auto rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://img.freepik.com/free-vector/human-resource-management-job-analysis-sourcing-screening-selection-female-cartoon-character-reading-job-applications-cv-candidatees_335657-2682.jpg"
                alt="Connexion"
              />
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <form className="max-w-[20rem] mx-auto space-y-2" onSubmit={handleSubmit}>
              <div className="mb-4">
                <h1 className="text-3xl text-center font-bold">Bienvenue</h1>
                <p className="text-center text-sm">
                  Veuillez entrer vos informations pour la création
                </p>
              </div>
              <div className="">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nom d'utilisateur
                </label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="flex h-9 w-full rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700 shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-transparent"
                  placeholder="Nom d'utilisateur"
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Prénom
                </label>
                <input
                  type="text"
                  id="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="flex h-9 w-full rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700 shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-transparent"
                  placeholder="Prénom"
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="flex h-9 w-full rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700 shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-transparent"
                  placeholder="Nom"
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex h-9 w-full rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700 shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-transparent"
                  placeholder="name@exemple.com"
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="*************************"
                    className="flex h-9 w-full rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700 shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-transparent"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-2"
                    onClick={togglePassword}
                  >
                    {showPassword ? (
                      <Eye className="h-5 w-5 text-gray-500" />
                    ) : (
                      <EyeOff className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <button
                  type="submit"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 mt-2 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2 text-center"
                >
                  Inscription
                </button>
              </div>
              <div className="flex justify-center">
                <p className="text-sm">
                  <span className="mr-2">J'ai déjà un compte ?</span>
                  <Link
                    to="/connexion"
                    className="text-[388da8] hover:underline cursor-pointer"
                  >
                    Se connecter
                  </Link>
                  <Link to="/acceuil" className="ml-2">
                    <ArrowRight className="h-5 w-5 text-[388da8]" />
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
