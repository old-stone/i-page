import "./index.css";

import * as serviceWorker from "./serviceWorker";

import App from "./components/container/App";
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import store from "./store";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#BB86FC",
      light: "#efb7ff",
      dark: "#8858c8",
      contrastText: "#000"
    },
    secondary: {
      main: "#03DAC6",
      light: "#66fff9",
      dark: "#00a896",
      contrastText: "#000"
    },
    error: {
      main: "#CF6679",
      light: "#ff96a8",
      dark: "#9b374d"
    },
    background: {
      default: "#0f0f0f"
    }
  },
  typography: {
    useNextVariants: true
  }
});

// 開発中のstore確認コード
// store.subscribe(console.log(store.getState()));

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
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
