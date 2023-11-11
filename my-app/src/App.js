import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Competences from './components/Competences';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Strona Główna</Link></li>
          <li><Link to="/projects">Projekty</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
          <li><Link to="competences">Kompetencje</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/competences" element={<Competences />} />
      </Routes>
    </Router>
  );
}

export default App;
