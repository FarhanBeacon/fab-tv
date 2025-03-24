import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const ChannelsTv = () => {
  const data = useOutletContext();
  const chUrl = data.find((channel) => channel.name == "Channels Television").source;
  const otherChannel = data.filter((info) => !info.name.includes("Channels Television"));

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"Channels Television"} chUrl={chUrl} />
    </div>
  );
};

export default ChannelsTv;