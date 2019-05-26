import "./index.css";

import * as serviceWorker from "./serviceWorker";

import App from "./container/App";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import store from "./store";

const theme = createMuiTheme({});

// 開発中のstore確認コード
// store.subscribe(console.log(store.getState()));

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
