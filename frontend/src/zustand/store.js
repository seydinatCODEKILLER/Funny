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
          loading: false,
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
      partialize: (state) => ({ token: state.token }),
    }
  )
);
