
import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const Jamuna = () => {
  
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "Jamuna|tv").source;
  const otherChannel = channelsData.filter((info) => !info.name.includes("Jamuna|tv"));

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"Jamuna|tv"} chUrl={chUrl} />
    </div>
  );
};

export default Jamuna;
