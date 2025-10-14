import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import App from "./App.jsx";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ModalsProvider>
        <Notifications position="top-center" />
        <App />
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>
);
