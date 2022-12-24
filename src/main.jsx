import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

import "./styles/global.css";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
