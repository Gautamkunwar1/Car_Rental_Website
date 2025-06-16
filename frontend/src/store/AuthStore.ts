import { create } from "zustand";

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

interface SignupData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface LoginData {
    email: string;
    password: string;
}

interface AuthState {
    user: User | null;
    loading: boolean;
    checkingAuth: boolean;
    signup: (data: SignupData) => Promise<void>;
    login: (data: LoginData) => Promise<{ role: string | null }>;
}

const useAuthStore = create<AuthState>((set, get) => ({
    user: null,
    loading: false,
    checkingAuth: false,

    signup: async ({ name, email, password, confirmPassword }) => {
        try {
            set({ loading: true });
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ name, email, password, confirmPassword }),
            });

            if (!response.ok) throw new Error("Signup failed");

            const result = await response.json();
            console.log("Signup successful", result);
            set({ loading: false });
        } catch (error) {
            set({ loading: false });
            console.error("Error during Signup:", error);
        }
    },

    login: async ({ email, password }) => {
        try {
            set({ loading: true });

            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) throw new Error("Login failed");

            const result = await response.json();
            const userData: User = result.data;

            set({ user: userData, loading: false });

            console.log("Login Successful", userData);
            return { role: userData.role };
        } catch (error) {
            set({ loading: false });
            console.error("Error during login:", error);
            return { role: null };
        }
    }
}));

export default useAuthStore;
