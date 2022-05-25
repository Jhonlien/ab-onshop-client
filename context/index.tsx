import { ThemeProvider, createTheme, PaletteMode } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {} ,
})

type ColorContextProviderProps = {
	children:  React.ReactNode
} &  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const ColorContextProvider : React.FC<ColorContextProviderProps> = ({children} : ColorContextProviderProps) => {

  const [mode, setMode] = React.useState<PaletteMode>("dark")

  const theme = React.useMemo(
    () =>
      createTheme({
        // typography : {
        //   fontFamily : "IBM Plex Sans, sans-serif"
        // },
        palette: {
          mode,
          ...(mode === 'dark'?
            {
              primary : {
                main : "rgb(102,178,255)"
              },
              background : {
                default : '#0B1929',
              },
              text : {
                secondary : "rgb(224, 227, 231)"
              },
              border : "rgb(23, 58, 94)",
              color : {
                buttonBackground : "rgb(10, 25, 41)",
                buttonBackgroundHover : "rgba(19, 47, 76, 0.4)",
                buttonBackgroundActive : "rgba(102, 178, 255, 0.08)",
                buttonBorder : "rgb(59 130 246 / 0.5)",
                buttonBorderActive : "rgb(59 130 246 / 0.5)",
              },
              
              
            } : {
              primary : {
                main : "rgb(78, 13, 55)"
              },
              text : {
                primary : "rgb(102,178,255)",
                secondary : "rgb(224, 227, 231)"
              },
              border : "rgb(224, 227, 231)",
              color : {
                buttonBackground : "#fff",
                buttonBackgroundHover  : "",
                buttonBackgroundActive : "",
                buttonBorder : "rgb(224, 227, 231)",
                buttonBorderActive : "rgb(78, 13, 55)",
              }
            }
          )
        },
      }),
    [mode],
  );

  
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  return(
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        { children }
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
