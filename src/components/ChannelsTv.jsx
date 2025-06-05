import { useContext } from "react";
import TVUI from "./TVUI";
import { AuthContext } from "../provider/AuthProvider";

const ChannelsTv = () => {
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData?.find(
    (channel) => channel.name == "Channels Television"
  ).source;
  const otherChannel = channelsData?.filter(
    (info) => !info.name.includes("Channels Television")
  );
  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"Channels Television"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default ChannelsTv;
