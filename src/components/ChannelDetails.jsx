import { useContext } from "react";
import TVUI from "./TVUI";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "./Loader";
import { useParams } from "react-router";

const ChannelDetails = () => {
  const { channelsData, loading } = useContext(AuthContext);
  const { chId } = useParams();

  if(loading){
    return <Loader />
  }
  const currentChannel = channelsData?.find((channel) => channel._id === chId);
  const otherChannel = channelsData?.filter((channel) => channel._id != chId);

  return (
    <div>
      <TVUI
        type={"LiveTV"}
        otherChannel={otherChannel}
        chName={currentChannel?.name}
        chUrl={currentChannel?.source}
      />
    </div>
  );
};

export default ChannelDetails;
