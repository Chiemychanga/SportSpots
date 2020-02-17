import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Volleyball from "./components/Volleyball/Volleyball";
import 'bootstrap/dist/css/bootstrap.min.css';
import { OpenGymInst } from "./components/OpenGymInst";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  // const gym1 = new OpenGymInst("gymName", "address", "sport", "dayOfWeek", "time", "cost", "levelDescription");
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Volleyball" component={Volleyball} />
        </Switch>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
