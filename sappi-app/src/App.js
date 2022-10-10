//imports from react
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Imported Components from Components folder
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import './App.css';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
