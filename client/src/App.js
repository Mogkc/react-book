import React, { Component } from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Router>
    );
  }
}

export default App;
