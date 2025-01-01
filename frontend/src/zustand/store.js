import { create } from "zustand";
import { persist } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      loading: true,
      login: (userData, token) => {
        const decoded = jwtDecode(token);
        const expiration = decoded.exp * 1000;

        set({
          user: userData,
          token,
          loading: false,
        });

        // Définir un timer pour déconnecter automatiquement après expiration
        const timeout = expiration - Date.now();
        if (timeout > 0) {
          setTimeout(() => {
            get().logout();
          }, timeout);
        }
      },
      logout: () =>
        set({
          user: null,
          token: null,
        }),
      setLoading: (isLoading) => set({ loading: isLoading }),
      isTokenValid: () => {
        const { token } = get();
        if (!token) return false;
        try {
          const decoded = jwtDecode(token);
          return decoded.exp * 1000 > Date.now();
        } catch (error) {
          console.log(error);
          return false;
        }
      },
    }),
    {
      name: "auth-store",
      partialize: (state) => ({ token: state.token }),
    }
  )
);
