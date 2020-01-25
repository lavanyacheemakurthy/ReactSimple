import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Dashboard from './components/Dashboard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="My World!!"></Header>
        <Dashboard>
          
        </Dashboard>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
