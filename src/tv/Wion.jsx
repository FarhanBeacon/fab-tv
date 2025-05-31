
import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const Wion = () => {
  
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "WION").source;
  const otherChannel = channelsData.filter((info) => !info.name.includes("WION"));

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"WION"} chUrl={chUrl} />
    </div>
  );
};

export default Wion;