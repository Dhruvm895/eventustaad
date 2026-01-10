import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import NewHome from "./pages/NewHome";
import About from "./pages/About";
import Services from "./pages/Services";
import Events from "./pages/Events";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";
import ScrollToTop from './components/ScrollToTop';
import WeddingDetail from "./pages/WeddingDetail";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">

    <div className="App">
         
      <BrowserRouter>
      <ScrollToTop />
        <Header />
         
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/our-work/:slug" element={<WeddingDetail />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
