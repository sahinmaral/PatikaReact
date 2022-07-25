import { useSelector } from "react-redux";
import { getCurrentLocation } from "../redux/countrySlice";

function CurrentCountry() {
  const currentLocation = useSelector(getCurrentLocation);

  return (
    <h3 className="text-center location">{`${currentLocation.continent}${
      !currentLocation.countryName ? "" : ` , ${currentLocation.countryName}`
    }`}</h3>
  );
}

export default CurrentCountry;
