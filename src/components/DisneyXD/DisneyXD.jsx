import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const DisneyXD = () => {
  const data = useOutletContext();
  const chUrl = data.find(
    (channel) => channel.name == "Disney XD"
  ).source;
  const otherChannel = data.filter(
    (info) => !info.name.includes("Disney XD")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"Disney XD"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default DisneyXD;
