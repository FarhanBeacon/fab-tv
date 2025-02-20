import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const Channel24 = () => {
  const data = useOutletContext();
  const chUrl = data.find((channel) => channel.name == "Channel 24").source;
  const otherChannel = data.filter((info) => !info.name.includes("Channel 24"));

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"Channel 24"} chUrl={chUrl} />
    </div>
  );
};

export default Channel24;
