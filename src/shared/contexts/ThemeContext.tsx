import { useMemo,createContext,useCallback,useState, useContext} from "react"
import {ThemeProvider} from '@mui/material'
import {DarkTheme, LightTheme} from '../themes/index';
import { Box } from "@mui/system";

interface iThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme:() => void;

}
const ThemeContext = createContext({} as iThemeContextData);

interface IAppThemeProvider {
  children: React.ReactNode
}
export const AppThemeProvider:React.FC<IAppThemeProvider> = ({ children }) => {

  const [themeName,setThemeName] = useState<'light' | 'dark'>('light')
  const toggleTheme = useCallback(() => {
    setThemeName(themeName => themeName === 'light' ? 'dark' : 'light');
  }, []);
  
  const theme = useMemo(() => {
   if(themeName === 'light') return LightTheme;
   return DarkTheme;
  }, [themeName]);
  return (
    <ThemeContext.Provider value={{themeName, toggleTheme}}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}> 
        {children}
        </Box>   
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
}