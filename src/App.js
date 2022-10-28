import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";
import { makeStyles } from "@mui/styles";
import Alertt from "./components/Alert";

const useStyles = makeStyles({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight:"100vh",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.App}>
          <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
      <Alertt />
    </Router>
  );
}

export default App;
