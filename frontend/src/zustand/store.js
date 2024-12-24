import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      loading: true,
      login: (userData, token) =>
        set({
          user: userData,
          token,
        }),
      logout: () =>
        set({
          user: null,
          token: null,
        }),
      setLoading: (isLoading) => set({ loading: isLoading }),
    }),
    {
      name: "auth-store",
      partialize: (state) => ({ user: state.user, token: state.token }),
    }
  )
);
