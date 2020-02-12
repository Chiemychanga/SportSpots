import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {OpenGymInst} from "./OpenGymInst";



function App() {
  const gym1 = new OpenGymInst("gymName", "address", "sport", "dayOfWeek", "time", "cost", "levelDescription");
  const title = "Home";
  return (
    <div className="App">
      <Header title={title}/>
      <p>{gym1.gymName}</p>
      <Footer />
    </div>
  );
}

export default App;
