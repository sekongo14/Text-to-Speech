import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../utils/userStore";

const Profile = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuthStore((state) => state);

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="p-16">
      <div className="p-8 mt-24 bg-white shadow">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="relative">
            <div className="absolute inset-x-0 top-0 flex items-center justify-center w-48 h-48 mx-auto -mt-24 text-gray-500 bg-gray-100 rounded-full shadow-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between mt-32 space-x-8 md:mt-0 md:justify-center">
            <button
              onClick={() => handleLogout()}
              className="text-white py-2 px-4 uppercase rounded bg-gray-400 hover:bg-gray-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
            >
              Deconnexion
            </button>
            <Link to="/">
              <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Retour à l'accueil
              </button>
            </Link>
          </div>
        </div>
        <div className="pb-12 mt-20 text-center border-b">
          {isEditing ? (
            <form
              // onSubmit={handleSubmit}
              // onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="flex flex-col">
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
                >
                  Enregistrer
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
                >
                  Retour
                </button>
              </div>
            </form>
          ) : (
            <div>
              <h1 className="text-4xl font-medium text-gray-700">
                {user?.first_name} {user?.last_name}
                <span className="font-light text-gray-500"></span>
              </h1>
              <p className="mt-3 font-light text-gray-600"></p>
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 mt-4 font-medium text-gray-500"
              >
                Modifier
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
