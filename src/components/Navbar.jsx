import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  return (
    <nav className="navbar w-fit bg-base-200 rounded drop-shadow-[0_0_3px_rgba(0,0,0,0.25)] m-2">
      {user ? (
        <div className="flex justify-center items-center gap-2">
          <div
            className="tooltip tooltip-bottom border-2 rounded-full p-0.5 cursor-pointer"
            data-tip={user?.displayName}
          >
            {user.photoURL ? (
              <img
                src={user.photoURL}
                className="w-[40px] rounded-full"
                alt=""
              />
            ) : (
              <div className="w-[35px] h-[35px] flex justify-center items-center">
                <h4 className="text-3xl font-semibold">
                  {user.displayName?.split("")[0].toUpperCase()}
                </h4>
              </div>
            )}
          </div>
          <Link
            onClick={logOutUser}
            className="btn shadow-none border-2 border-blue-400"
          >
            LogOut
          </Link>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-3">
          <Link
            to={"/login"}
            className="btn shadow-none border-2 border-blue-400"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="btn shadow-none border-2 border-black"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
