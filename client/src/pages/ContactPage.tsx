import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { JoinUs } from "../components/JoinUs";

export function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="pt-16">
                <JoinUs />
                <Contact />
            </div>
            <Footer />
        </div>
    );
}
