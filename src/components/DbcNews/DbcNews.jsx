import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const DbcNews = () => {
  const data = useOutletContext();
  const chUrl = data.find(
    (channel) => channel.name == "DBC NEWS"
  ).source;
  const otherChannel = data.filter(
    (info) => !info.name.includes("DBC NEWS")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"DBC NEWS"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default DbcNews;
