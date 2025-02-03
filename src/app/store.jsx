import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/counters/counterSlice";

const store = configureStore({
  reducer: {
    counters: CounterReducer,
  },
});

export default store;
