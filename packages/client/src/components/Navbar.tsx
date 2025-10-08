import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ModeToggle } from '@/theme/mode-toggle'
import { ThemeProvider } from '@/theme/theme-provider'
import logo_of_Powerinweb from "@/assets/powerinweb_logo.jpeg"
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle,
  SheetDescription 
} from '@/components/ui/sheet'
import { 
  Menu, 
  Globe,
  FolderOpen,
  FileText,
  Users,
  MessageCircle
} from 'lucide-react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { to: "/websites", label: "Websites", icon: Globe },
    { to: "/projects", label: "Projects", icon: FolderOpen },
    { to: "/blogs", label: "Blog", icon: FileText },
    { to: "/about", label: "About", icon: Users },
    { to: "/discord", label: "Join Discord", icon: MessageCircle, isPrimary: true }
  ]

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="sticky mx-4 top-0 z-50 flex flex-row justify-between items-center px-4 py-3 shadow-sm bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" id="navbar">
      {/* Logo Section */}
      <Link 
        to="/" 
        className='flex items-center gap-3 cursor-target'
        onClick={closeMobileMenu}
      >
        <Avatar className="h-10 w-10 md:h-12 md:w-12 ">
          <AvatarImage src={logo_of_Powerinweb} alt='Powerinweb' />
          <AvatarFallback>PW</AvatarFallback>
        </Avatar>
        <h1 className='text-xl md:text-2xl font-bold'>Powerinweb</h1>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-4 items-center">
        {navItems.map((item) => (
          item.isPrimary ? (
            <Button 
              key={item.to}
              className="text-base cursor-pointer"
              asChild
            >
              <Link to={item.to}>{item.label}</Link>
            </Button>
          ) : (
            <Button
              key={item.to}
              variant="link"
              className="text-base hover:text-gray-600 transition-all duration-200 ease-in-out cursor-pointer dark:hover:text-gray-400"
              asChild
            >
              <Link to={item.to}>{item.label}</Link>
            </Button>
          )
        ))}
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ModeToggle />
        </ThemeProvider>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center gap-2">
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ModeToggle />
        </ThemeProvider>
        
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[85vw] max-w-md sm:w-[380px]"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Main navigation links for Powerinweb website
            </SheetDescription>
            
            {/* Mobile Menu Header */}
            <div className="flex items-center gap-3 pb-6 mb-6 border-b">
              <Avatar className="h-10 w-10">
                <AvatarImage src={logo_of_Powerinweb} alt='Powerinweb' />
                <AvatarFallback>PW</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-lg font-semibold">Powerinweb</h2>
                <p className="text-sm text-muted-foreground">Navigation</p>
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <Button
                    key={item.to}
                    variant={item.isPrimary ? "default" : "ghost"}
                    className={`justify-start gap-3 h-12 ${
                      item.isPrimary ? '' : 'hover:bg-accent'
                    }`}
                    asChild
                    onClick={closeMobileMenu}
                  >
                    <Link to={item.to} className="flex items-center gap-3">
                      <IconComponent className="h-4 w-4" />
                      <span className="text-base">{item.label}</span>
                    </Link>
                  </Button>
                )
              })}
            </div>

            {/* Mobile Menu Footer */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs text-muted-foreground text-center">
                © 2024 Powerinweb. All rights reserved.
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default Navbar