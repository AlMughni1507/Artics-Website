import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ServicesPage from "./Services";

export default function Page() {
    return (
        <>
            <Navbar />
            <main>
                <ServicesPage />
            </main>
            <Footer />
        </>
    );
}
