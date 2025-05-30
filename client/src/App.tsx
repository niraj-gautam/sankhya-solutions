import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";

import { Contact } from "./components/Contact";
import { ServicePage } from "./pages/ServicePage";
import { ResourcePage } from "./pages/ResourcePage";
import { BackToTop } from "./components/BackToTop";
import { ScrollToTop } from "./components/ScrollToTop";
import { Footer } from "./components/Footer";
import { ArticlePage } from "./pages/ArticlePage";
import Overview from "./components/Overview";

import { AboutPage } from "./pages/AboutPage";
import { JoinUs } from "./components/JoinUs";
import { ContactPage } from "./pages/ContactPage";
import { IndustryPage } from "./pages/IndustryPage";

function HomePage() {
    return (
        <>
            <Header />
            <div>
                <Hero />
                <Overview />
                <Services />

                <JoinUs />
            </div>
            <Footer />
        </>
    );
}

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white">
                <ScrollToTop />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services/:id" element={<ServicePage />} />
                    <Route path="/industries/:id" element={<IndustryPage />} />
                    <Route path="/resources" element={<ResourcePage />} />
                    <Route
                        path="/resources/:articleSlug"
                        element={<ArticlePage />}
                    />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <BackToTop />
            </div>
        </Router>
    );
}

export default App;
