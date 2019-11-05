import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </div>
    );
  }

  }


export default App;
