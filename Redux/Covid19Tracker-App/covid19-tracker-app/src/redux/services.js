import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getGlobalCase = createAsyncThunk(
  "tracker/getGlobalCase",
  async () => {
    const { data } = await axios.get("https://covid19.mathdro.id/api/daily");
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      recovered: dailyData.recovered.total,
      active:
        dailyData.confirmed.total -
        dailyData.recovered.total -
        dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    const lastUpdatedDate = modifiedData[modifiedData.length - 1].date;

    return {
      data: modifiedData,
      lastUpdated: `${new Date(lastUpdatedDate).toDateString()} ${new Date(
        lastUpdatedDate
      ).toLocaleTimeString()}`,
    };
  }
);

export const getCountryCase = createAsyncThunk(
  `tracker/getCountryCase`,
  async (country) => {
    const { data } = await axios.get(
      `https://covid19.mathdro.id/api/countries/${country}/confirmed`
    );
    return {
      data: data[0],
      lastUpdated: `${new Date(data[0].lastUpdate).toDateString()} ${new Date(
        data[0].lastUpdate
      ).toLocaleTimeString()}`,
    };
  }
);
