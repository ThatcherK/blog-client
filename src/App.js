import React from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navBar';
import Navigation from './routes/navigation';

function App() {
  return (
    <Router>
      <NavBar/>
      <Navigation/>
    </Router>
  );
}

export default App;
