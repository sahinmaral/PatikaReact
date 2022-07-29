import React from "react";
import { Line } from 'react-chartjs-2';
import { useSelector } from "react-redux";
import { getCovidData } from "../redux/trackerSlice";

function LineGraph() {
  const covidData = useSelector(getCovidData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };


  const labels = covidData.data.map((data)=> {return data.date})

  const data = {
    labels,
    datasets: [
      {
        label: "Infected",
        data: covidData.data.map(({confirmed})=> confirmed),
        borderColor: "#2c2cdf",
        fill: true,
      },
      {
        label: "Deaths",
        data: covidData.data.map(({deaths})=> deaths),
        borderColor: "rgb(255,0,0)",
        fill: true,
        backgroundColor: "rgb(253,125,125)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}

export default LineGraph;
