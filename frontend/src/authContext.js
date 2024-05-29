import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginStatus, setLogin] = useState(false);

  const login = async () => {
    try {
      setLogin(true);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed');
    }
  };

  const logout = () => {
    setLogin(false);
    sessionStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ loginStatus,login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
