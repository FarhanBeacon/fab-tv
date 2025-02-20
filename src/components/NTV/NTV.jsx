import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const NTV = () => {
  const data = useOutletContext();
  const chUrl = data.find((channel) => channel.name == "NTV Live").source;
  const otherChannel = data.filter((info) => !info.name.includes("NTV Live"));

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"NTV Live"} chUrl={chUrl} />
    </div>
  );
};

export default NTV;
