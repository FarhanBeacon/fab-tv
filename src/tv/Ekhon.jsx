
import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const Ekhon = () => {
  
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "EKHON TV").source;
  const otherChannel = channelsData.filter((info) => !info.name.includes("EKHON TV"));

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"EKHON TV"} chUrl={chUrl} />
    </div>
  );
};

export default Ekhon;
