import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Menu from './Components/Menu';


function App() {
  return (
    <Router>
      <Menu/>
    </Router>
    
  );
}

export default App;
