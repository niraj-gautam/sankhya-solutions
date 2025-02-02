import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Resources } from "./components/Resources";
import { Contact } from "./components/Contact";
import { ServicePage } from "./pages/ServicePage";
import { ResourcePage } from "./pages/ResourcePage";
import { BackToTop } from "./components/BackToTop";
import { ScrollToTop } from "./components/ScrollToTop";
import { Footer } from "./components/Footer";

function HomePage() {
    return (
        <>
            <Header />
            <div className="pt-16">
                <Hero />
                <About />
                <Services />
                <Stats />
                <Resources />
                <Contact />
            </div>
            <Footer />
        </>
    );
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-white">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services/:id" element={<ServicePage />} />
                    <Route path="/resources" element={<ResourcePage />} />
                </Routes>
                <BackToTop />
            </div>
        </Router>
    );
}

export default App;
