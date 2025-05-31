import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const AtnNews = () => {
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "ATN News TV"
  ).source;
  const otherChannel = channelsData.filter(
    (info) => !info.name.includes("ATN News TV")
  );

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"ATN News TV"} chUrl={chUrl} />
    </div>
  );
};

export default AtnNews;
