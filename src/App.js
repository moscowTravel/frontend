import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Common/Header/index";

import Home from "./pages/Home/index";
import MapPage from "./pages/Map/index"

import './App.scss'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/map" component={MapPage} />
      </div>
    </Router>
  );
}

export default App;
