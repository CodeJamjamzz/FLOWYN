import { create } from 'zustand';

interface AuthState { 
    isLoggedIn: boolean;
    setLoggedIn: (loggedIn: boolean) => void;
}

export const useAuth = create<AuthState> ((set) => ({
    isLoggedIn: false,
    setLoggedIn: (loggedIn: boolean) => set({ isLoggedIn: loggedIn })
}))