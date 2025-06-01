import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const ChannelUI = ({ name, image, navLink }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="border rounded-lg p-2 shadow-md transition duration-300  active:scale-85 cursor-pointer">
      <Link to={user? navLink : "/login"}>
        <img
          src={image}
          alt={name}
          className="w-full h-fit object-cover rounded-md"
        />
        <h3 className="text-xs md:text-lg font-semibold mt-2">{name}</h3>
      </Link>
    </div>
  );
};

export default ChannelUI;