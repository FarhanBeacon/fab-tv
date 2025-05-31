import React from "react";
import loadingImage from "../assets/lotties/loadingImage.json";
import Lottie from "lottie-react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <span className="loading loading-infinity loading-xl"></span>
      <Lottie animationData={loadingImage} loop={true} className="w-72" />
    </div>
  );
};

export default Loader;
