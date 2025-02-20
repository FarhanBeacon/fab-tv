import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ChannelUI = ({ name, image, navLink }) => {
  return (
    <div className="border rounded-lg p-2 shadow-md transition duration-300  active:scale-85 cursor-pointer">
      <Link to={navLink}>
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-md"
        />
        <h3 className="text-lg font-semibold mt-2">{name}</h3>
      </Link>
    </div>
  );
};

ChannelUI.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  navLink: PropTypes.string.isRequired,
};

export default ChannelUI;