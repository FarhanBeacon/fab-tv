
import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const DiscoveryRex = () => {
  
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "Discovery Relaxation"
  ).source;
  const otherChannel = channelsData.filter(
    (info) => !info.name.includes("Discovery Relaxation")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"Discovery Relaxation"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default DiscoveryRex;
