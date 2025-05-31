
import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const Independent = () => {
  
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "Independent Television"
  ).source;
  const otherChannel = channelsData.filter(
    (info) => !info.name.includes("Independent Television")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"Independent Television"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default Independent;
