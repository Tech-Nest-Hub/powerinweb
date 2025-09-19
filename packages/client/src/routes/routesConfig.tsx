import Navbar from "@/components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Websites from "@/pages/websites";
import Projects from "@/pages/projects";
import About from "@/pages/about";
import Home from "@/pages/home";
import Blogs from "@/pages/blog";

const RoutesConfig = () => {
    return (
        <>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/websites" element={<Websites />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                </Routes>
        </>
    );
}

export default RoutesConfig;