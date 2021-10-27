import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { createLogger } from "redux-logger";
import generateId from "./middlewares/genetatedId";

const log = createLogger({ collapsed: true });

function createStore() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(generateId, log),
  });
}

export default createStore;
