import { getCountry } from "../redux/trackerSlice";
import { useSelector } from "react-redux";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";

function Graphs() {
  const country = useSelector(getCountry);
  const { status } = useSelector((state) => state.tracker);

  return (
    <div className="graphs">
      <div className="w-75">
        {status === 'succeeded' && (country === "" ? <LineGraph /> : <BarGraph />)}
      </div>
    </div>
  );
}

export default Graphs;
