import { useOutletContext } from "react-router-dom";
import TVUI from "../TVUI/TVUI";

const Rtv = () => {
  const data = useOutletContext();
  const chUrl = data.find((channel) => channel.name == "Rtv News").source;
  const otherChannel = data.filter((info) => !info.name.includes("Rtv News"));

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"Rtv News"} chUrl={chUrl} />
    </div>
  );
};

export default Rtv;
