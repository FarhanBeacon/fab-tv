import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const TSports = () => {
  const data = useOutletContext();
  const chUrl = data.find(
    (channel) => channel.name == "T Sports"
  ).source;
  const otherChannel = data.filter(
    (info) => !info.name.includes("T Sports")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"T Sports"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default TSports;
