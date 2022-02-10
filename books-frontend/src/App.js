import React, { Component } from "react";
import "./App.css";
import Books from './Pages/Books.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Create from './Pages/Create.js';
class App extends Component {
  render() {
    return (

       <Router>
        <Routes>
          <Route path="/" element={<Books/>}>
          </Route>
          <Route path="/create-book" element={<Create/>}>
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Routes>
    </Router>
    );
  }
}

export default App;
