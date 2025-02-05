import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Selection from './pages/Selection'; // Import the new Selection component
import './App.css';

function App() {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login userCredentials={userCredentials} />} />
            <Route path="/register" element={<Register setUserCredentials={setUserCredentials} />} />
            <Route path="/selection" element={<Selection />} /> {/* Add the Selection route */}
            {/* Add routes for waste disposal and waste recycling pages as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;