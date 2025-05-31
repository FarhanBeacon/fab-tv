import React, { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [channelsData, setChannelsData] = useState([]);

  // fetching the channels info for building/testing the app
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((info) => {
        setChannelsData(info);
        setLoading(false);
      });
  }, []);

  const info = {
    channelsData,
    loading
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
