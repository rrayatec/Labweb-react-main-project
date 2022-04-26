import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StyledEngineProvider } from "@mui/material/styles";

import AuthFunction from "./functions/auth/AuthFunction";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <App AuthFunction={AuthFunction} name ={"soy el nombre"} />
  </StyledEngineProvider>,

  document.getElementById("root")
);
