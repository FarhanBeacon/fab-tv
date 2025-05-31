import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const Channeli = () => {
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "Channel i News"
  ).source;
  const otherChannel = channelsData.filter(
    (info) => !info.name.includes("Channel i News")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"Channel i News"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default Channeli;
