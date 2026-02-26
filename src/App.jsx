import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Exhibitors from './pages/Exhibitors';
import Services from './pages/Services';
import Partners from './pages/Partners';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exhibitors" element={<Exhibitors />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partenaires" element={<Partners />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
