import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import mixin from "styles/mixin";
import theme from "styles/theme";
import { GlobalStyles } from "styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
// import "styles/reset.scss";
// import "styles/common.scss";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={{ ...theme, ...mixin }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
