import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const Cgtn = () => {
    const data = useOutletContext();
    const chUrl = data.find((channel) => channel.name == "CGTN Europe").source;
    const otherChannel = data.filter((info) => !info.name.includes("CGTN Europe"));
  
    return (
      <div>
        <TVUI otherChannel={otherChannel} chName={"CGTN Europe"} chUrl={chUrl} />
      </div>
    );
};

export default Cgtn;