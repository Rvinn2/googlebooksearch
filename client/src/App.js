import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import Books from './containers/Books';
import{BrowserRouter as Router, Switch, Route}from "react-router-dom";
function App() {
  return (
    <Router> 
    <Switch>
    <Route path= "/home"component={Home} />
    <Route path= "/books"component={Books} />
    </Switch>
  </Router>
  
  );
}

export default App;
