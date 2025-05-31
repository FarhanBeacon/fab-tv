import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const AlJazeera = () => {
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "Al Jazeera"
  ).source;
  const otherChannel = channelsData.filter(
    (info) => !info.name.includes("Al Jazeera")
  );

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"Al Jazeera"} chUrl={chUrl} />
    </div>
  );
};

export default AlJazeera;
