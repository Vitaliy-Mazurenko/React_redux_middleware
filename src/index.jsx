import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import App from "./App";
import configureStore from "./store/configureStore";

import { courseAdded } from "./store/courses";

const store = configureStore();
window.store = store;

store.dispatch(courseAdded({ title: "React" }));
store.dispatch(courseAdded({ title: "PHP" }));
store.dispatch(courseAdded({ title: "React advandced" }));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
