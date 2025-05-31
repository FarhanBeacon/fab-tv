
import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const DisneyXD = () => {
  
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "Disney XD"
  ).source;
  const otherChannel = channelsData.filter(
    (info) => !info.name.includes("Disney XD")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"Disney XD"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default DisneyXD;
