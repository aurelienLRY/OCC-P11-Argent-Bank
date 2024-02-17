import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routeur from "./components/Routes";
import "./assets/sass/main.scss";
import { BrowserRouter as Router } from "react-router-dom";
//redux
import { Provider } from "react-redux";
import { store } from "./assets/redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Header />
      <Routeur />
      <Footer />
    </Router>
    </Provider>
  </React.StrictMode>
);
