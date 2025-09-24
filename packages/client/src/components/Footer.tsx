import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import img from "@/assets/powerinweb_logo.jpeg"


const Footer = () => {
    return (
        <footer className="shadow-md mt-10 ">
            <div className="flex justify-between px-10 py-6"> 
                <div>
                    <h1 className="flex flex-row items-center">
                        <img src={img} alt="powerinweb" className="h-20 rounded-full" />
                        <div>
                            <Link to="/" className="text-lg font-medium">Power in Web</Link>
                            <p className="text-sm">Surf the Web's Hidden Gems</p>
                        </div>
                    </h1>
                </div>
                <div className="flex flex-col">
                    <Button variant="link"><Link to="/About">About</Link></Button>
                    <Button variant="link"><Link to="/Websites">Websites</Link></Button>
                    <Button variant="link"><Link to="/Blogs">Blogs</Link></Button>
                    <Button variant="link"><Link to="/Projects">Projects</Link></Button>
                </div>
                <div className="flex flex-col">
                    <Button variant="link"><Link to="/Documentation">Documentation</Link></Button>
                    <Button variant="link"><Link to="/FAQ">FAQ</Link></Button>
                    <Button variant="link"><Link to="/Support">Support</Link></Button>
                </div>
                <div className="flex flex-col">
                    <Button variant="link"><Link to="https://twitter.com/">X(Twitter)</Link></Button>
                    <Button variant="link"><Link to="https://github.com/">Github</Link></Button>
                    <Button variant="link"><Link to="https://www.linkedin.com/">LinkedIn</Link></Button>
                    <Button variant="link"><Link to="https://discord.com/">Discord</Link></Button>
                    <Button variant="link"><Link to="https://www.youtube.com/">Youtube</Link></Button>
                </div>
            </div>
           
            <div className="flex justify-end px-10 pb-4">
                <p>© 2025 Power in Web. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;