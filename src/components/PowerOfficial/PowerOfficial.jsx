import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const PowerOfficial = () => {
  const data = useOutletContext();
  const chUrl = data.find(
    (channel) => channel.name == "Power Rangers Official"
  ).source;
  const otherChannel = data.filter(
    (info) => !info.name.includes("Power Rangers Official")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"Power Rangers Official"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default PowerOfficial;
