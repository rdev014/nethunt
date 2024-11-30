"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
  toggleAuthState: (state: "login" | "register" | "logout") => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Fetch user data based on the token from the server
  const fetchUser = async () => {
    try {
      const response = await axios.get("/api/users/me"); // Endpoint to get user info based on the token
      setUser(response.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    // On initial load, check if the token exists and fetch user data if authenticated
    const token = document.cookie;
    if (token) {
      setIsAuthenticated(true)
      console.log(token);
      
    }
  }, []);

  const login = (token: string) => {
    try {
      setIsAuthenticated(true);
      document.cookie = `token=${token}; path=/; max-age=${7 * 24 * 60 * 60}; secure; samesite=strict`; // Set cookie with a 7-day expiry
      fetchUser(); // Re-fetch user data after login
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    try {
      await axios.get("/api/users/logout"); // Adjust endpoint as needed
      setUser(null);
      setIsAuthenticated(false);
      document.cookie = "token=; Max-Age=0; path=/"; // Clear token by setting max-age to 0
      router.push("/auth/login"); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleAuthState = (state: "login" | "register" | "logout") => {
    switch (state) {
      case "login":
        router.push("/auth/login");
        break;
      case "register":
        router.push("/auth/register");
        break;
      case "logout":
        logout();
        break;
      default:
        console.error("Invalid auth state");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, toggleAuthState }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
