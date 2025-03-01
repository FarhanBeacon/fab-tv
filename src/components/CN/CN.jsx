import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const CN = () => {
  const data = useOutletContext();
  const chUrl = data.find(
    (channel) => channel.name == "Cartoon Network"
  ).source;
  const otherChannel = data.filter(
    (info) => !info.name.includes("Cartoon Network")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"Cartoon Network"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default CN;
