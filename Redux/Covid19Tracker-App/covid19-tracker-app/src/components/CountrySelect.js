import { useDispatch, useSelector } from "react-redux";
import countries from "../redux/countries.json";
import { getCountryCase, getGlobalCase } from "../redux/services";
import { getCountry, setCountry } from "../redux/trackerSlice";

function CountrySelect() {
  const country = useSelector(getCountry);
  const dispatch = useDispatch();

  const handleSelectChange = async(event) => {
    if (event.target.value === "Global") {
      dispatch(setCountry(""));
      await dispatch(getGlobalCase())
    } else {
      dispatch(setCountry(event.target.value));
      await dispatch(getCountryCase(event.target.value));
    }
  };

  return (
    <div className="country-select">
      <select
        className="form-select"
        aria-label="Countries"
        onChange={handleSelectChange}
        defaultValue={country === "" ? "Global" : country}
      >
        <option value="Global">Global</option>
        {countries.map((country, index) => {
          return (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default CountrySelect;
