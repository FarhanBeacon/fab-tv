
import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const News24 = () => {
  
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "News24 Television"
  ).source;
  const otherChannel = channelsData.filter(
    (info) => !info.name.includes("News24 Television")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"News24 Television"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default News24;
