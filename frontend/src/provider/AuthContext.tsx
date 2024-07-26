"use client"

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define the shape of the context
interface AuthContextType {
  userId: string | null;
  token: string | null;
  login: (userId: string, token: string) => void;
  logout: () => void;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);


const LOCAL_STORAGE_USER_KEY = 'authUserId';
const LOCAL_STORAGE_TOKEN_KEY = 'authToken';


// Define a provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (userId: string, token: string) => {
    setUserId(userId);
    setToken(token);
  };

  const logout = () => {
    setUserId(null);
    setToken(null);
  };

  useEffect(() => {
    // Load user and token from local storage when the component mounts
    const storedUserId = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    const storedToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
    if (storedUserId && storedToken) {
      setUserId(storedUserId);
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    // Save user and token to local storage whenever they change
    if (userId && token) {
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, userId);
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    } else {
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    }
  }, [userId, token]);

  return (
    <AuthContext.Provider value={{ userId, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
