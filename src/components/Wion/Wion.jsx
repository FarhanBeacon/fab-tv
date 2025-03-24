import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const Wion = () => {
  const data = useOutletContext();
  const chUrl = data.find((channel) => channel.name == "WION").source;
  const otherChannel = data.filter((info) => !info.name.includes("WION"));

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"WION"} chUrl={chUrl} />
    </div>
  );
};

export default Wion;