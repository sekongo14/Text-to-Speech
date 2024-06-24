import { CircleArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import DialogConfirm from "../components/Dialog.jsx";
import useAuthStore from "../utils/userStore.jsx";
function Choix() {
  const [showCard, setShowCard] = useState(false);
  const navigate = useNavigate();
  const { logout, isLoggedIn, user } = useAuthStore((state) => state);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/connexion");
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/connexion");
    }
  }, []);
  return (
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

      <DialogConfirm
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={handleLogout}
        message="Êtes-vous sûr de vouloir vous déconnecter ?"
      />
    </div>
  );
}

export default Choix;
