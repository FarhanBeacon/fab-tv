
import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const Somoy = () => {
  
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "SOMOY TV").source;
  const otherChannel = channelsData.filter((info) => !info.name.includes("SOMOY TV"));

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"SOMOY TV"} chUrl={chUrl} />
    </div>
  );
};

export default Somoy;
