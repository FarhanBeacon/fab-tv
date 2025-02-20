import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const Channeli = () => {
  const data = useOutletContext();
  const chUrl = data.find((channel) => channel.name == "Channel i News").source;
  const otherChannel = data.filter(
    (info) => !info.name.includes("Channel i News")
  );

  return (
    <div>
      <TVUI
        otherChannel={otherChannel}
        chName={"Channel i News"}
        chUrl={chUrl}
      />
    </div>
  );
};

export default Channeli;
