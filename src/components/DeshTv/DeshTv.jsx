import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const DeshTv = () => {
  const data = useOutletContext();
  const chUrl = data.find(
    (channel) => channel.name == "DESH TV LIVE"
  ).source;
  const otherChannel = data.filter(
    (info) => !info.name.includes("DESH TV LIVE")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"DESH TV LIVE"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default DeshTv;
