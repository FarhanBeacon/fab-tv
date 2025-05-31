
import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const Ekattor = () => {
  
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "Ekattor").source;
  const otherChannel = channelsData.filter((info) => !info.name.includes("Ekattor"));

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"Ekattor"} chUrl={chUrl} />
    </div>
  );
};

export default Ekattor;
