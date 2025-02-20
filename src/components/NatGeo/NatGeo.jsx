import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const NatGeo = () => {
  const data = useOutletContext();
  const chUrl = data.find(
    (channel) => channel.name == "Nat Geo Animals"
  ).source;
  const otherChannel = data.filter(
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
