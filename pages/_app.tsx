import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material'
import {  makeStyles } from '@mui/styles'
import Navbar from '../components/Navbar'
import IconButton from '@mui/material/IconButton';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { ColorContextProvider, ColorModeContext } from '../context';
import Box from '@mui/material/Box'
import { Button, CssBaseline, GlobalStyles } from "@mui/material";


export const useStyles = makeStyles(theme => ({
  '@global':{
    body:{
      backgroundColor: "background.default"
    }
  }
}))

function MyApp({ Component, pageProps }: AppProps) {

  const classes = useStyles()

  return(
    <ColorContextProvider>
      <Navbar/>
        <CssBaseline/>
        <Component {...pageProps} />
    </ColorContextProvider>
  ) 
}

export default MyApp
