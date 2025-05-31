
import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const NTV = () => {
  
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "NTV Live").source;
  const otherChannel = channelsData.filter((info) => !info.name.includes("NTV Live"));

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"NTV Live"} chUrl={chUrl} />
    </div>
  );
};

export default NTV;
