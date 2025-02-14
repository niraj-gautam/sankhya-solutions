import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="pt-10">
                <Contact />
            </div>
            <Footer />
        </div>
    );
}
