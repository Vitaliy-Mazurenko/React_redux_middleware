import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

function createStore() {
  return configureStore({
    reducer,
  });
}

export default createStore;
