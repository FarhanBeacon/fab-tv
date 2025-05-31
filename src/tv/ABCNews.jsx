import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const ABCNews = () => {
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "ABC News"
  ).source;
  const otherChannel = channelsData.filter(
    (info) => !info.name.includes("ABC News")
  );

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"ABC News"} chUrl={chUrl} />
    </div>
  );
};

export default ABCNews;
