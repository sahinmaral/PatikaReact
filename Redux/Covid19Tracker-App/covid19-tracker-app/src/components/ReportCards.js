import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CountUp from "react-countup";
import { getCountry, getCovidData } from "../redux/trackerSlice";

function ReportCards() {
  const country = useSelector(getCountry);
  const covidData = useSelector(getCovidData);

  const [reportCardData, setReportCardData] = useState({});

  useEffect(() => {
    
    if (country === "") {
      setReportCardData({
        infected: covidData.data
          .map(({ confirmed }) => confirmed)
          .reduce((prev, curr) => prev + curr, 0),
        recovered: covidData.data
          .map(({ recovered }) => recovered)
          .reduce((prev, curr) => prev + curr, 0),
        deaths: covidData.data
          .map(({ deaths }) => deaths)
          .reduce((prev, curr) => prev + curr, 0),
        active: covidData.data
          .map(({ active }) => active)
          .reduce((prev, curr) => prev + curr, 0),
        lastUpdated: covidData.lastUpdated,
      });
    } else {
      setReportCardData({
        infected: covidData.data.confirmed,
        recovered: covidData.data.recovered,
        deaths: covidData.data.deaths,
        active: covidData.data.active,
        lastUpdated : covidData.lastUpdated
      });
    }
  }, [country, covidData]);

  return (
    <div className="grid-container container mt-5">
      <div className="report-card-container">
        <div className="report-card" style={{ backgroundColor: "#b1d7fe" }}>
          <p>Infected</p>
          <h2>
            <b>
              <CountUp
                start={0}
                end={reportCardData.infected}
                duration={2.75}
                separator=","
              />
            </b>
          </h2>
          <p>Last Updated at:</p>
          <p
            style={{
              fontSize: ".875em",
              color: "#6c757d",
            }}
          >
            {reportCardData.lastUpdated}
          </p>
          <p>Number of active cases of COVID-19</p>
          <p>{country !== "" && country}</p>
        </div>
        <div
          className="report-card-under"
          style={{ backgroundColor: "#5b79ff" }}
        ></div>
      </div>
      <div className="report-card-container">
        <div className="report-card" style={{ backgroundColor: "#ddf6e2" }}>
          <p>Recovered</p>
          <h2>
            <b>
              <CountUp
                start={0}
                end={reportCardData.recovered}
                duration={2.75}
                separator=","
              />
            </b>
          </h2>
          <p>Last Updated at: </p>
          <p
            style={{
              fontSize: ".875em",
              color: "#6c757d",
            }}
          >
            {reportCardData.lastUpdated}
          </p>
          <p>Number of active cases of COVID-19</p>
          <p>{country !== "" && country}</p>
        </div>
        <div
          className="report-card-under"
          style={{ backgroundColor: "#7efb83" }}
        ></div>
      </div>
      <div className="report-card-container">
        <div className="report-card" style={{ backgroundColor: "#f4d7d7" }}>
          <p>Deaths</p>
          <h2>
            <b>
              <CountUp
                start={0}
                end={reportCardData.deaths}
                duration={2.75}
                separator=","
              />
            </b>
          </h2>
          <p>Last Updated at: </p>
          <p
            style={{
              fontSize: ".875em",
              color: "#6c757d",
            }}
          >
            {reportCardData.lastUpdated}
          </p>
          <p>Number of active cases of COVID-19</p>
          <p>{country !== "" && country}</p>
        </div>
        <div
          className="report-card-under"
          style={{ backgroundColor: "#fa7077" }}
        ></div>
      </div>
      <div className="report-card-container">
        <div className="report-card" style={{ backgroundColor: "#f4e1ca" }}>
          <p>Active</p>
          <h2>
            <b>
              <CountUp
                start={0}
                end={reportCardData.active}
                duration={2.75}
                separator=","
              />
            </b>
          </h2>
          <p>Last Updated at: </p>
          <p
            style={{
              fontSize: ".875em",
              color: "#6c757d",
            }}
          >
            {reportCardData.lastUpdated}
          </p>
          <p>Number of active cases of COVID-19</p>
          <p>{country !== "" && country}</p>
        </div>
        <div
          className="report-card-under"
          style={{ backgroundColor: "#f2e678" }}
        ></div>
      </div>
    </div>
  );
}

export default ReportCards;
