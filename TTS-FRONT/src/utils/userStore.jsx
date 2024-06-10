import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      login: (accessToken, refreshToken) => {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        set({ isLoggedIn: true });
      },
      logout: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        set({ isLoggedIn: false });
      },
      setUser: (user) => {
        set({ user });
      },
    }),
    {
      name: "auth-storage", // Unique storage name
    }
  )
);

export default useAuthStore;
