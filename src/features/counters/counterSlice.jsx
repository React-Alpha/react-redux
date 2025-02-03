import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
];

const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((counter) => counter.id === id);
      state[index].value += 1;
    },
    decrement: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((counter) => counter.id === id);
      state[index].value -= 1;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
