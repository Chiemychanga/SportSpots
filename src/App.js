import React from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Volleyball from "./components/Volleyball/Volleyball";
import Tennis from "./components/Tennis/Tennis";
import Basketball from "./components/Basketball/Basketball";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Volleyball" component={Volleyball} />
          <Route path="/Tennis" component={Tennis} />
          <Route path="/Basketball" component={Basketball} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
