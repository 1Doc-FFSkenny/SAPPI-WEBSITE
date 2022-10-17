//imports from react
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Imported Components from Components folder
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import './App.css';
import Dropdown from './Components/Dropdown';
import Footer from './Components/Footer';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Dropdown/>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
