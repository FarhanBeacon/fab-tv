import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";
import loadingImage from "./assets/lotties/loadingImage.json";
import Lottie from "lottie-react";
import { Outlet } from "react-router";
import Footer from "./components/Footer";

function App() {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <span className="loading loading-infinity loading-xl"></span>
        <Lottie animationData={loadingImage} loop={true} className="w-72" />
      </div>
    );
  }
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
