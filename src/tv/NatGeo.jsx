
import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const NatGeo = () => {
  
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "Nat Geo Animals"
  ).source;
  const otherChannel = channelsData.filter(
    (info) => !info.name.includes("Nat Geo Animals")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"Nat Geo Animals"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default NatGeo;
