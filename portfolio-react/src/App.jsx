import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import DSA from './pages/DSA';
import Contact from './pages/Contact';
import EcommercePlatform from './pages/projects/EcommercePlatform';
import TaskManagementApp from './pages/projects/TaskManagementApp';
import FinanceDashboard from './pages/projects/FinanceDashboard';
import Certification from './pages/Certification';
import Education from './pages/Education';
import Skills from './pages/Skills';
import './index.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/dsa" element={<DSA />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/ecommerce-platform" element={<EcommercePlatform />} />
            <Route path="/projects/task-management-app" element={<TaskManagementApp />} />
            <Route path="/projects/finance-dashboard" element={<FinanceDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
