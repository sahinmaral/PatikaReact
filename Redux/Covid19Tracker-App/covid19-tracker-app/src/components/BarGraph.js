import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { getCovidData } from "../redux/trackerSlice";

function BarGraph() {
  const covidData = useSelector(getCovidData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: true,
        text: `Current state in ${covidData.data.countryRegion}`,
      },
    },
  };

  const data = {
    labels: ["Infected", "Recovered", "Deaths", "Active"],
    datasets: [
      {
        data: {
          Infected: covidData.data.confirmed,
          Recovered: covidData.data.recovered,
          Deaths: covidData.data.deaths,
          Active: covidData.data.active,
        },
        backgroundColor: [
          "rgb(129,139,253)",
          "rgb(126,251,131)",
          "rgb(250,112,119)",
          "rgb(242,230,120)",
        ],
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
}

export default BarGraph;
