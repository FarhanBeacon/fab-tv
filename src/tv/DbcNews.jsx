
import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const DbcNews = () => {
  
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "DBC NEWS"
  ).source;
  const otherChannel = channelsData.filter(
    (info) => !info.name.includes("DBC NEWS")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"DBC NEWS"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default DbcNews;
