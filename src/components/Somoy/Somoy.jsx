import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const Somoy = () => {
  const data = useOutletContext();
  const chUrl = data.find((channel) => channel.name == "SOMOY TV").source;
  const otherChannel = data.filter((info) => !info.name.includes("SOMOY TV"));

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"SOMOY TV"} chUrl={chUrl} />
    </div>
  );
};

export default Somoy;
