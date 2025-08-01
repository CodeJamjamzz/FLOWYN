import { create } from 'zustand';

interface ProfileState {
    username: string;
    email: string;
    userType: boolean;

    setUsername: (username: string) => void;
    setEmail: (email: string) => void;
    setUserType: (userType: boolean) => void;
}

export const useProfile = create<ProfileState>((set) => ({
    username: '',
    email: '',
    userType: true,

    setUsername: (username : string) => set({ username}),
    setEmail : (email : string) => set({email}),
    setUserType: (userType : boolean) => set({userType}),   
}))