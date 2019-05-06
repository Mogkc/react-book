import React, { Component } from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Navbar';
import About from './components/About';
import Search from './pages/Search';
import Saved from './pages/Saved';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router className="container">
        <NavBar />
        <About />
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Router>
    );
  }
}

export default App;
