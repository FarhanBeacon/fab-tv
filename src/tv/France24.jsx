
import { useContext } from "react";
import TVUI from "../components/TVUI";
import { AuthContext } from "../provider/AuthProvider";

const France24 = () => {
  
  const { channelsData } = useContext(AuthContext);
  const chUrl = channelsData.find(
    (channel) => channel.name == "FRANCE 24 English").source;
  const otherChannel = channelsData.filter((info) => !info.name.includes("FRANCE 24 English"));

  return (
    <div>
      <TVUI otherChannel={otherChannel} chName={"FRANCE 24 English"} chUrl={chUrl} />
    </div>
  );
};

export default France24;
