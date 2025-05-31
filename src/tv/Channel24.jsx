import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const Channel24 = () => {
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "Channel 24"
  ).source;
  const otherChannel = channelsData.filter(
    (info) => !info.name.includes("Channel 24")
  );

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"Channel 24"} chUrl={chUrl} />
    </div>
  );
};

export default Channel24;
