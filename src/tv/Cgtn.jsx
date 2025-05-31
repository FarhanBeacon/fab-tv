import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const Cgtn = () => {
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "CGTN Europe"
  ).source;
  const otherChannel = channelsData.filter(
    (info) => !info.name.includes("CGTN Europe")
  );

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"CGTN Europe"} chUrl={chUrl} />
    </div>
  );
};

export default Cgtn;
