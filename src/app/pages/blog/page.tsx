import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import BlogPage from "./Blog";

export default function Blog() {
    return (
        <>
            <Navbar />
            <main>
                <BlogPage />
            </main>
            <Footer />
        </>
    );
}
