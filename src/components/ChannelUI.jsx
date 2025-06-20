import { Link } from "react-router";

const ChannelUI = ({ type, chId, name, image, navLink }) => {
  return (
    <div className="border rounded-lg p-2 shadow-md transition duration-300 active:scale-85 cursor-pointer">
      {type === "LiveTV" && (
        <Link to={`/ChannelDetails/${chId}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-fit object-cover rounded-md"
        />
        <h4 className="text-xs md:text-lg font-semibold mt-2">{name}</h4>
      </Link>
      )}
      {type === "WebSeries" && (
        <Link to={navLink}>
        <img
          src={image}
          alt={name}
          className="w-full h-fit object-cover rounded-md"
        />
        <h3 className="text-xs md:text-lg font-semibold mt-2">{name}</h3>
      </Link>
      )}
    </div>
  );
};

export default ChannelUI;