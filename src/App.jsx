import { NavLink, Outlet } from "react-router";
import Footer from "./components/Footer";
import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";
// eslint-disable-next-line no-unused-vars
import { easeInOut, motion } from "framer-motion";
import Banner from "./components/Banner";
import AuthenticationBar from "./components/AuthenticationBar";
import Loader from "./components/Loader";

function App() {
  const { user, loading } = useContext(AuthContext);
  const name = user?.displayName?.split(" ")[0];

  const lists = [
    <li key={1}>
      <NavLink to={"/"}>Home</NavLink>
    </li>,
    <li key={2}>
      <NavLink to={"/webSeries"}>Web Series</NavLink>
    </li>,
    <li key={3}>
      <NavLink to={"/movies"}>Movies</NavLink>
    </li>,
  ];

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <header>
        <Banner />
        {user ? (
          <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  {lists}
                </ul>
              </div>
              <motion.div
                animate={{ x: [-200, 0, 0] }}
                transition={{ duration: 1, repeat: 0, ease: easeInOut }}
              >
                <h3 className="md:text-3xl text-shadow-neutral-content font-semibold">
                  Hello!{" "}
                  <span className="text-blue-400">
                    {name?.charAt(0).toUpperCase() + name?.slice(1, 7)}
                  </span>
                </h3>
                <p className="text-xs md:text-base text-gray-600">
                  Welcome To Fab TV
                </p>
              </motion.div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{lists}</ul>
            </div>
            <div className="navbar-end">
              <AuthenticationBar />
            </div>
          </div>
        ) : (
          <div className="w-fit mx-auto">
            <AuthenticationBar />
          </div>
        )}
      </header>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
