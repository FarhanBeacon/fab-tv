import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const Independent = () => {
  const data = useOutletContext();
  const chUrl = data.find(
    (channel) => channel.name == "Independent Television"
  ).source;
  const otherChannel = data.filter(
    (info) => !info.name.includes("Independent Television")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"Independent Television"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default Independent;
