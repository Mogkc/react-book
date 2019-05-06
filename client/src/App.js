import React, { Component } from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        {/* NavBar, to be added */}
        {/* About */}
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Router>
    );
  }
}

export default App;
