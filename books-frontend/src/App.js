import React, { Component } from "react";
import "./App.css";
import Books from './Pages/Books.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from './Pages/Create.js';
import Update from "./Pages/Update.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Books />}></Route>
          <Route path="/create-book" element={<Create />}></Route>
          <Route path="/books/:id" element={<Update />}>
            {/* <Home /> */}
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
