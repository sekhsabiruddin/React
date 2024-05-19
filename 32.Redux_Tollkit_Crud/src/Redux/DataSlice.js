import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.push(action.payload);
    },
    deleteData: (state, action) => {
      debugger;
      return state.filter((item) => item.id !== action.payload);
    },
    editToggle: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, edit: !item.edit }; // Toggle the 'edit' property
        }
        return { ...item, edit: false };
      });
    },
    updateData: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload, edit: false }; // Set edit to false
      }
    },
  },
});

export const { addData, deleteData, updateData, editToggle } =
  todoSlice.actions;
export default todoSlice.reducer;
