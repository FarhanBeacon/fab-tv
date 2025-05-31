
import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const DeshTv = () => {
  
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "DESH TV LIVE"
  ).source;
  const otherChannel = channelsData.filter(
    (info) => !info.name.includes("DESH TV LIVE")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"DESH TV LIVE"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default DeshTv;
