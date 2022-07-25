import "./App.css";
import CountryOption from "./components/CountryOption";
import WeatherList from "./components/WeatherList";
import CurrentCountry from "./components/CurrentCountry";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchLocation, fetchWeatherInfos } from "./redux/services";
import useGeoLocation from "./hooks/useGeoLocation";

function App() {
  const dispatch = useDispatch();
  const location = useGeoLocation();

  const countryState = useSelector((state) => state.country);

  useEffect(() => {
    if (location.loaded) {
      (async () => {
        await dispatch(
          fetchLocation({
            latitude: location.coordinates.lat,
            longitude: location.coordinates.lng,
          })
        );
      })();
      (async () => {
        await dispatch(
          fetchWeatherInfos({
            latitude: location.coordinates.lat,
            longitude: location.coordinates.lng,
          })
        );
      })();
    }
  }, [location,dispatch]);

  const renderSwitch = () => {
    if (location.error) {
      return (
        <div className="box weather-box" style={{ marginTop: "150px" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "25px" }}>{location.error.message}</p>
          </div>
        </div>
      );
    }

    switch (countryState.status) {
      case "pending":
        return (
          <div className="box weather-box" style={{ marginTop: "150px" }}>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "25px" }}>Loading ...</p>
            </div>
          </div>
        );
      case "failed":
        return (
          <div className="box weather-box" style={{ marginTop: "150px" }}>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "25px" }}>{countryState.error}</p>
            </div>
          </div>
        );
      case "succeeded":
        return (
          <>
            <CountryOption />
            <div className="box weather-box">
              <CurrentCountry />
              <WeatherList />
            </div>
          </>
        );
      default:
        break;
    }
  };

  return <div>{renderSwitch()}</div>;
}

export default App;
