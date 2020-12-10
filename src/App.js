import React from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navBar';
import Navigation from './routes/navigation';
import Authenticate from './context/authContext';

function App() {
  return (
    <Router>
      <Authenticate>
        <NavBar />
        <Navigation />
      </Authenticate>
    </Router>
  );
}

export default App;
