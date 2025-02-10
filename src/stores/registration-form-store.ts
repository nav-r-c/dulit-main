import { create } from "zustand";

interface RegistrationFormStore {
    festival_dates: string,
    name: string,
    email: string,
    phone_number: number,
    age: number,
    gender: string,
    organization: string
}

export const useRegistrationStore = create<RegistrationFormStore>(() => ({
    festival_dates: '',
    name: '',
    email: '',
    phone_number: 0,
    age: 0,
    gender: '',
    organization: ''
}))