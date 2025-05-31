
import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const Rtv = () => {
  
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "Rtv News").source;
  const otherChannel = channelsData.filter((info) => !info.name.includes("Rtv News"));

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"Rtv News"} chUrl={chUrl} />
    </div>
  );
};

export default Rtv;
