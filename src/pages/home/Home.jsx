import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServiceCatalog from "./components/ServiceСatalog/ServiceСatalog";
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function home() {
  return (
    <Router>
      <Header />
      <Routes>
        
        <Route path="/" element={<ServiceCatalog />} />
        
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default home;