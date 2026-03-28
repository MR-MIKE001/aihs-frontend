// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Program from './pages/Program';


export default function App() {
  return (
    <div >
      {/* Navigation */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Program/>} />
      </Routes>
    </div>
  );
}
