import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const title = "Home";
  return (
    <div className="App">
      <Header title={title} />

      <Footer />
    </div>
  );
}

export default App;
