import { createSlice } from "@reduxjs/toolkit";
import { getTasksAsync , toggleTaskAsync , addTaskAsync, deleteTaskAsync} from "./services";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  activeFilter: "all",
  addNewTaskAdding: false,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // removeTask: (state, action) => {
    //   state.items = state.items.filter((item) => item.id !== action.payload);
    // },
    editActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state, action) => {
      state.items = state.items.filter((task) => task.isDone === false);
    },
  },
  extraReducers: {
    // Get Tasks
    [getTasksAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTasksAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getTasksAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

    // Add task
    [addTaskAsync.pending]: (state, action) => {
      state.addNewTaskAdding = true;
    },
    [addTaskAsync.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.addNewTaskAdding = false;
    },
    [addTaskAsync.rejected]: (state, action) => {
      state.addNewTaskAdding = false;
      state.error = action.error.message;
    },

    // Toggle Task
    [toggleTaskAsync.fulfilled]: (state, action) => {
      const { id, completed } = action.payload;
      const index = state.items.findIndex(item => item.id === id)
      state.items[index].completed = completed
    },
    [toggleTaskAsync.rejected]: (state, action) => {
      state.error = action.error.message;
    },

    // Delete Task
    [deleteTaskAsync.fulfilled]: (state, action) => {
      state.items = action.payload
    },
  },
});

export const selectTasks = (state) => state.todos.items;
export const selectActiveFilter = (state) => state.todos.activeFilter;

export const { editActiveFilter, clearCompleted } =
  todosSlice.actions;
export default todosSlice.reducer;
