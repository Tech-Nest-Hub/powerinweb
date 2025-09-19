import { Link } from 'react-router-dom'

import { ModeToggle } from '@/theme/mode-toggle'
import { ThemeProvider } from '@/theme/theme-provider'
import logo_of_Powerinweb from "@/assets/powerinweb_logo.jpeg"

import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'


const Navbar = () => {
  return (

    <nav className="flex flex-row justify-between items-center px-2 py-1 shadow-sm " id="navbar">
     <div className="flex items-center gap-4 ml-4">
      <Avatar>
        <AvatarImage src={logo_of_Powerinweb} alt='Logo of Powerinweb' />
        <AvatarFallback>PW</AvatarFallback>
      </Avatar>
      <h1 className='text-2xl font-bold'>Powerinweb</h1>
     </div>

      <div className="flex gap-4 py-3 mr-4">
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
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ModeToggle />
        </ThemeProvider>
      </div>
    </nav>

  )
}

export default Navbar
