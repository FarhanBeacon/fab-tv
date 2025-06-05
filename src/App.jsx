import { Outlet } from "react-router";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="min-h-screen bg-gray-100">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
