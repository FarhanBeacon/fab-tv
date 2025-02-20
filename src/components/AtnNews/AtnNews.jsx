import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const AtnNews = () => {
  const data = useOutletContext();
  const chUrl = data.find((channel) => channel.name == "ATN News TV").source;
  const otherChannel = data.filter(
    (info) => !info.name.includes("ATN News TV")
  );

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"ATN News TV"} chUrl={chUrl} />
    </div>
  );
};

export default AtnNews;
