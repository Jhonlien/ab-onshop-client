import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { makeStyles } from '@mui/styles'
import Navbar from '../components/Navbar'
import { ColorContextProvider, ColorModeContext } from '../context';
import { CssBaseline, } from "@mui/material";
import { AnimatePresence } from 'framer-motion'


export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: "background.default"
    }
  }
}))

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <ColorContextProvider>
      <Navbar />
      <CssBaseline />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </ColorContextProvider>
  )
}

export default MyApp
