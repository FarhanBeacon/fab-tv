import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const ABCNews = () => {
  const data = useOutletContext();
  const chUrl = data.find((channel) => channel.name == "ABC News").source;
  const otherChannel = data.filter(
    (info) => !info.name.includes("ABC News")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"ABC News"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default ABCNews;