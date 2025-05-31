
import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const DWNews = () => {
  
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "DW News").source;
  const otherChannel = channelsData.filter(
    (info) => !info.name.includes("DW News")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"DW News"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default DWNews;