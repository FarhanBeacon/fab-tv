import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const Ekattor = () => {
  const data = useOutletContext();
  const chUrl = data.find((channel) => channel.name == "Ekattor").source;
  const otherChannel = data.filter((info) => !info.name.includes("Ekattor"));

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"Ekattor"} chUrl={chUrl} />
    </div>
  );
};

export default Ekattor;
