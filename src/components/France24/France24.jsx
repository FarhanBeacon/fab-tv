import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const France24 = () => {
  const data = useOutletContext();
  const chUrl = data.find((channel) => channel.name == "FRANCE 24 English").source;
  const otherChannel = data.filter((info) => !info.name.includes("FRANCE 24 English"));

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"FRANCE 24 English"} chUrl={chUrl} />
    </div>
  );
};

export default France24;
