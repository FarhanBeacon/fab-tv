import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const AlJazeera = () => {
  const data = useOutletContext();
  const chUrl = data.find((channel) => channel.name == "Al Jazeera").source;
  const otherChannel = data.filter(
    (info) => !info.name.includes("Al Jazeera")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"Al Jazeera"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default AlJazeera;