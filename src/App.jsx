import { Outlet, useLoaderData } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  const data = useLoaderData();

  return (
    <>
      <Outlet context={data} />
      <Footer />
    </>
  );
}

export default App;
