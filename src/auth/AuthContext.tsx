import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../store/userSlice';

const AuthContext = React.createContext({});

const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser() as any)    
    setIsAuthenticated(true);
    console.log(children);
  }, []);

  return  (
    <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}


export { AuthProvider, useAuth };
