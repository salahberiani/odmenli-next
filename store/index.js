import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      auth: null,
      profile: null,
      setProfile: (payload) => set({ profile: payload }),
      login: (payload) => set({ isLoggedIn: true, auth: payload }),
      logout: () => {
        window.location.replace('/');
        set({ isLoggedIn: false, auth: null });
      },
    }),
    {
      name: 'zu', // unique name
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
  )
);

export default useStore;
