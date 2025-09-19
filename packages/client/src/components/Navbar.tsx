import { ModeToggle } from '@/theme/mode-toggle'
import { ThemeProvider } from '@/theme/theme-provider'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (

    <nav className="flex justify-between items-center px-6 py-1 shadow-sm ">
      <Link to="/"><img src="#" alt="Logo-Power in web" className="p-4 flex-1" /></Link>

      <div className="flex gap-4 py-3 ">
        <Button
          variant="link"
          className="text-base hover:text-gray-600 transition-all duration-200 ease-in-out cursor-pointer dark:hover:text-gray-400"
          asChild>
          <Link to="/websites">Websites</Link>
        </Button>
        <Button 
          variant="link" 
          className="text-base hover:text-gray-600 transition-all duration-200 ease-in-out cursor-pointer dark:hover:text-gray-400"
          asChild>
            <Link to="/projects">Projects</Link>
        </Button>
        <Button 
          variant="link"
          className="text-base hover:text-gray-600 transition-all duration-200 ease-in-out cursor-pointer dark:hover:text-gray-400"
          asChild>
          <Link to="/blogs">Blog</Link>
        </Button>
        <Button 
          variant="link"
          className="text-base hover:text-gray-600 transition-all duration-200 ease-in-out cursor-pointer dark:hover:text-gray-400"
          asChild>
          <Link to="/about">About</Link>
        </Button>
        <Button className="text-base cursor-pointer dark:hover:text-gray-400 hover" asChild>
          <Link to="/discord">Join Discord</Link>
        </Button>
      </div>


      <div className="flex items-center pl-10 ">
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ModeToggle />
        </ThemeProvider>
      </div>
    </nav>

  )
}

export default Navbar
