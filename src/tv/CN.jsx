
import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const CN = () => {
  
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "Cartoon Network"
  ).source;
  const otherChannel = channelsData.filter(
    (info) => !info.name.includes("Cartoon Network")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"Cartoon Network"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default CN;
