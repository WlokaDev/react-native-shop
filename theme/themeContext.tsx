import { createContext, ReactNode, useContext } from 'react'
import { themeConfig } from './themeConfig'

const ThemeContext = createContext<typeof themeConfig>(themeConfig)

const ThemeProvider = ({ children }: Readonly<{ children: ReactNode }>) => (
  <ThemeContext.Provider value={themeConfig}>{children}</ThemeContext.Provider>
)

const useTheme = () => useContext(ThemeContext)

export { ThemeProvider, useTheme }
