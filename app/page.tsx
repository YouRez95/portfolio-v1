import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/sections/About";
import Blogs from "./components/sections/Blogs";
import Testimonials from "./components/sections/Testimonials";
export default function PresentationPage() {
  return (
    <>
      <Navbar />
      <main className="space-y-32 mb-20 overflow-x-hidden">
        <Home />
        <Projects />
        <About />
        <Blogs />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
