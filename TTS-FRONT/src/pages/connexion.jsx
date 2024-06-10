import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import "./../assets/css/inscription.css";

function Connexion() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/account/api/token/login/', {
      username: formData.username,
      password: formData.password
    })
    .then(response => {
      console.log(response.data);
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
      navigate('/');
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <>
      <div className="Connexion w-[100%] h-[100vh] bg-gray-300 ">
        <div className="w-full h-full flex justify-center items-center  rounded-lg">
          <div className="flex container w-[55rem] h-[30rem] shadow-xl bg-gray-50 rounded-lg">
            <div className="flex-1 flex justify-center items-center">
              <form className="max-w-[20rem] mx-auto space-y-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <h1 className="text-3xl text-center font-bold">
                    Welcome back
                  </h1>

                  <p className="text-center text-sm">
                    Veuillez entrer vos informations pour vous connecter
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
                    className="flex h-9 w-full rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-transparent disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
                    placeholder="Nom d'utilisateur"
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
                      type={`${showPassword ? "text" : "password"}`}
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="*************************"
                      className="flex h-9 w-full rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-transparent disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
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

                <div className="">
                  <button
                    type="submit"
                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 mt-2 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2 text-center"
                  >
                    Connexion
                  </button>
                </div>
                <div className="flex justify-center">
                  <p className="text-sm">
                    <span className="mr-2">Pas encore de compte ?</span>
                    <Link
                      to="/inscription"
                      className="text-[388da8]hover:underline"
                    >
                      S'inscrire
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="w-[95%] h-[95%]  mx-auto rounded-lg">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="https://img.freepik.com/free-vector/security-concept-illustration_114360-497.jpg?w=740&t=st=1717200569~exp=1717201169~hmac=cbfdf42e96425afa614f3d964805d2ddafd653ffcb171e886ff717e10be0e477"
                  alt="Connexion"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Connexion;
