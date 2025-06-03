import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [channelsData, setChannelsData] = useState([]);
  const [user, setUser] = useState(null);

  // fetching the channels info for building/testing the app
  useEffect(() => {
    fetch("https://fab-tv-server.vercel.app/channels")
      .then((res) => res.json())
      .then((data) => {
        setChannelsData(data);
      });
  }, []);

  // Create User with Email & Password
  const createUserWithEmailPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update User
  const updateUserInfo = (username) => {
    return updateProfile(auth.currentUser, {
      displayName: username,
    });
  };

  // Send a user a verification email
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // login with email and password
  const loginWithEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Create user with google
  const createGoogleUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Logout user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // On Auth Change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const info = {
    channelsData,
    loading,
    user,
    setLoading,
    setUser,
    createUserWithEmailPass,
    updateUserInfo,
    verifyEmail,
    createGoogleUser,
    loginWithEmailPass,
    logOutUser,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
