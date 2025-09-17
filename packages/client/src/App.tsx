import { ThemeProvider } from './theme/theme-provider'
import { ModeToggle } from './theme/mode-toggle'

const App = () => {
  return (
    <div>
       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
    </ThemeProvider>
    </div>
  )
}

export default App
