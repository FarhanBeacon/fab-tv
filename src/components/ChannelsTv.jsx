import { useContext } from "react";
import TVUI from "./TVUI";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "./Loader";

const ChannelsTv = () => {
  const { channelsData, loading } = useContext(AuthContext);

  if (!loading) {
    return <Loader/>
  }

  const chUrl = channelsData.find(
    (channel) => channel.name == "Channels Television"
  ).source;
  const otherChannel = channelsData.filter(
    (info) => !info.name.includes("Channels Television")
  );

  return (
    <div>
      <TVUI
        type={"LiveTV"}
        otherChannel={otherChannel}
        chName={"Channels Television"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default ChannelsTv;
