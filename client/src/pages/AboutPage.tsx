import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
import { About } from "../components/About";
import { OurTeam } from "../components/Team";
import { Footer } from "../components/Footer";
import { AboutCards } from "../components/AboutCards";

export function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="pt-20 ">
                <div>
                    <About />
                    <AboutCards />
                    <OurTeam />
                </div>
                <div className="mt-20">
                    <Contact />
                </div>
            </div>
            <Footer />
        </div>
    );
}
