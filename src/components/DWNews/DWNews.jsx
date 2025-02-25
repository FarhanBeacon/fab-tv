import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const DWNews = () => {
  const data = useOutletContext();
  const chUrl = data.find((channel) => channel.name == "DW News").source;
  const otherChannel = data.filter(
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