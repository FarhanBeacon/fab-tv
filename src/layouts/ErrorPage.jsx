import React from "react";
import Lottie from "lottie-react";
import errorImage from "../assets/lotties/errorImage.json";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <Lottie animationData={errorImage} loop={true} className="w-56" />
        <Link className="btn" to={"/"}>
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
