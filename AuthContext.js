import React, {createContext, useState, useEffect} from 'react';
import {initializedAuth} from './firebaseConfig'; // Assurez-vous que le chemin est correct
import {onAuthStateChanged} from 'firebase/auth';

export const AuthContext = createContext({
  isAuthenticated: false, // Default value
  setIsAuthenticated: () => {}, // Default function
});

export const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(initializedAuth, user => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
