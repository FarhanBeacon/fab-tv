import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const Jamuna = () => {
  const data = useOutletContext();
  const chUrl = data.find((channel) => channel.name == "Jamuna|tv").source;
  const otherChannel = data.filter((info) => !info.name.includes("Jamuna|tv"));

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"Jamuna|tv"} chUrl={chUrl} />
    </div>
  );
};

export default Jamuna;
