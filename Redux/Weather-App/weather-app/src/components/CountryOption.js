import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countries } from "../redux/countries";
import { getCurrentLocation } from "../redux/countrySlice";
import { fetchLocation, fetchWeatherInfos } from "../redux/services";

function CountryOption() {
  const currentLocation = useSelector(getCurrentLocation);
  const dispatch = useDispatch();
  const [country, setCountry] = useState(currentLocation.countryName);

  const setCurrentLocation = () => {
    const location = countries.filter((item) =>
      item.Country.includes(country)
    )[0];

    return { lang: location.Latitude, long: location.Longitude };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { lang, long } = setCurrentLocation(country);

    await dispatch(
      fetchLocation({
        latitude: lang,
        longitude: long,
      })
    );

    await dispatch(
      fetchWeatherInfos({
        latitude: lang,
        longitude: long,
      })
    );
  };

  return (
    <div className="box country-box">
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-between">
          <label htmlFor="exampleDataList">Enter country</label>
          <input
            defaultValue={country}
            onChange={(e) => setCountry(e.target.value)}
            className="form-control"
            list="countryDatalist"
            id="countryList"
            placeholder="Enter country..."
          ></input>
          <datalist id="countryDatalist">
            {countries.map((country) => {
              return (
                <option value={country.Country} key={country.CountryCode} />
              );
            })}
          </datalist>
        </div>
        <div className="set-country">
          <button type="submit" className="btn">
            Change country
          </button>
        </div>
      </form>
    </div>
  );
}

export default CountryOption;
