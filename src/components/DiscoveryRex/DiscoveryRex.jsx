import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const DiscoveryRex = () => {
  const data = useOutletContext();
  const chUrl = data.find(
    (channel) => channel.name == "Discovery Relaxation"
  ).source;
  const otherChannel = data.filter(
    (info) => !info.name.includes("Discovery Relaxation")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"Discovery Relaxation"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default DiscoveryRex;
