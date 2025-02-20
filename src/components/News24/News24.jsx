import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const News24 = () => {
  const data = useOutletContext();
  const chUrl = data.find(
    (channel) => channel.name == "News24 Television"
  ).source;
  const otherChannel = data.filter(
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
