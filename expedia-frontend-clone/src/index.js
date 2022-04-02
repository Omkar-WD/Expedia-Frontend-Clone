import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./Redux/store";
ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Router>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
