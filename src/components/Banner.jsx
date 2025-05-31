import { Link } from "react-router";
import Lottie from "lottie-react";
import watchingTv from "../assets/lotties/watchingTv.json"

const Banner = () => {
  return (
    <Link to={"/"} className="flex items-center justify-center bg-black text-white border-b-2 border-blue-400 h-[150px]">
      <div className="flex justify-center items-center gap-2 font-rancho">
        <h4 className="text-6xl font-semibold text-center">Fab</h4>
        <Lottie animationData={watchingTv} loop={true} className="w-48" />
        <h4 className="text-6xl ms-2 font-semibold text-center">TV</h4>
      </div>
    </Link>
  );
};

export default Banner;