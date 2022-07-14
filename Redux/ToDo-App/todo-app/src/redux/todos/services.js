import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTasksAsync = createAsyncThunk(
  "todos/getTasksAsync",
  async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`
    );
    return data;
  }
);

export const addTaskAsync = createAsyncThunk("todos/addTask", async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`,
    input
  );
  return data;
});

export const toggleTaskAsync = createAsyncThunk(
  "todos/toggleTask",
  async ({ id, input }) => {
    const { data } = await axios.patch(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`,
      input
    );
    return data;
  }
);

export const deleteTaskAsync = createAsyncThunk(
  "todos/deleteTask",
  async (id) => {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`
    );
    return data;
  }
);
