import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import AboutPage from "@/app/pages/about/About";

export default function About() {
    return (
        <>
            <Navbar />
            <main>
                <AboutPage />
            </main>
            <Footer />
        </>
    );
}
