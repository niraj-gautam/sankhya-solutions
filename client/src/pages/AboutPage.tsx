import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
import { About } from "../components/About";
import { OurTeam } from "../components/Team";
import { Footer } from "../components/Footer";

export function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="pt-24 ">
                <div>
                    <About />
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
