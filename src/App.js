import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Company from '../src/Pages/Company';
import Careers from '../src/Pages/Careers';
import Services from '../src/Pages/Services';
import Blog from '../src/Pages/Blog';
import FAQs from '../src/Pages/FAQs';
import Contact from '../src/Pages/Contact';
import './index.css';
import TermsAndConditions from './Pages/TermsAndConditions';
import PrivacyPolicy from './Pages/PrivacyPolicy';

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/terms" element={<TermsAndConditions />} /> 
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
