import { ModeToggle } from '@/theme/mode-toggle'
import { ThemeProvider } from '@/theme/theme-provider'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (

    <nav className="flex justify-between items-center px-6 py-1 shadow-sm ">
      <img src="#" alt="Logo-Power in web" className="p-4 flex-1" />

      <div className="flex gap-4 py-3 ">
        <Button
          variant="link"
          className="text-base hover:text-gray-600 transition-all duration-200 ease-in-out cursor-pointer dark:hover:text-gray-400"
          asChild>
          <Link to="/websites">Websites</Link>
        </Button>
        <Button variant="link" className="text-base hover:text-gray-600 transition-all duration-200 ease-in-out cursor-pointer dark:hover:text-gray-400">Projects</Button>
        <Button variant="link" className="text-base hover:text-gray-600 transition-all duration-200 ease-in-out cursor-pointer dark:hover:text-gray-400">Blog</Button>
        <Button variant="link" className="text-base hover:text-gray-600 transition-all duration-200 ease-in-out cursor-pointer dark:hover:text-gray-400">About</Button>
        <Button className="text-base cursor-pointer dark:hover:text-gray-400 hover">Join Discord</Button>
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
