import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import GalleryPage from "./Gallery";

export default function Gallery() {
    return (
        <>
            <Navbar />
            <main>
                <GalleryPage />
            </main>
            <Footer />
        </>
    );
}
