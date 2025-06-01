import { AuthContext } from "./provider/AuthProvider";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import { useContext } from "react";
import Loader from "./components/Loader";

function App() {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
