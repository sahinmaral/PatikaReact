import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CountrySelect from "./components/CountrySelect";
import Error from "./components/Error";
import Loading from "./components/Loading";
import Graphs from "./components/Graphs";
import Header from "./components/Header";
import ReportCards from "./components/ReportCards";
import { getCountryCase, getGlobalCase } from "./redux/services";

function App() {
  const { status, country, error } = useSelector((state) => state.tracker);
  const dispatch = useDispatch();

  
  useEffect(() => {
    const fetchCovidCases = async() => {
      if (country === "") {
        await dispatch(getGlobalCase());
      } else {
        await dispatch(getCountryCase(country));
      }
    }
    fetchCovidCases();
  }, []);

  const renderSwitch = () => {
    switch (status) {
      case "pending":
        return (
          <>
            <Header />
            <Loading />
          </>
        );
      case "succeeded":
        return (
          <>
            <Header />
            <ReportCards />
            <CountrySelect />
            <Graphs />
          </>
        );
      case "failed":
        return (
          <>
            <Header />
            <Error message={error} />
          </>
        );

      default:
        break;
    }
  };

  return <div>{renderSwitch()}</div>;
}

export default App;
