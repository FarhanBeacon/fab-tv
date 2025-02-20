import { useOutletContext } from "react-router-dom";
import ChannelUI from "../ChannelUI/ChannelUI";

const HomePage = () => {
  const data = useOutletContext();

  if (!Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-center bg-black text-white border-b-2 border-blue-400 h-[150px]">
        <div>
          <h4 className="text-5xl font-semibold text-center">Fab TV</h4>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.map((channel, index) => (
          <ChannelUI
            key={index}
            name={channel.name}
            image={channel.image}
            navLink={channel.navLink}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;