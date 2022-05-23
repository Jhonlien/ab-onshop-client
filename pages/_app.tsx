import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {  makeStyles } from '@mui/styles'
import Navbar from '../components/Navbar'
import { ColorContextProvider, ColorModeContext } from '../context';
import { CssBaseline, } from "@mui/material";


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
