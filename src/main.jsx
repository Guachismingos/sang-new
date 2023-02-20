import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

import "./styles/global.css";
import "swiper/css/pagination";
import "swiper/css";
import theme from "./styles/theme";
import { PluginsProvider } from "./context/PluginsContext";
import { CRUDProvider } from "./context/CRUDContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PluginsProvider>
          <CRUDProvider>
            <Layout />
          </CRUDProvider>
        </PluginsProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
