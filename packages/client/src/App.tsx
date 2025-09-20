import Navbar from "@/components/Navbar";
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Websites from "@/pages/website/pages/ViewWebsitePage";
import Projects from "@/pages/project/projects.tsx";
import About from "@/pages/about/about.tsx";
import Home from "@/pages/home/home.tsx";
import Blogs from "@/pages/blog/blog.tsx";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/websites" element={<Websites />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
    </Router>
  );
}

export default App;
