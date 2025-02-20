import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const Ekhon = () => {
  const data = useOutletContext();
  const chUrl = data.find((channel) => channel.name == "EKHON TV").source;
  const otherChannel = data.filter((info) => !info.name.includes("EKHON TV"));

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"EKHON TV"} chUrl={chUrl} />
    </div>
  );
};

export default Ekhon;
