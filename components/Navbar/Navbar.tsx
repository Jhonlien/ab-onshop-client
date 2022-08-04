import React from 'react'

import { makeStyles, useTheme } from '@mui/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../../context';
import Sidebar from '../Sidebar';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import { useScrollTrigger } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

export const useStyles = makeStyles((theme) => ({
  logo: {
    width: '170px',
    marginRight: '2rem'
  },
  searchButton: {
    background: "#fff",
    minWidth: '100%',
    fontSize: '0.8rem',
    lineHeight: '1.8rem',
    fontWeight: "bold",
    textTransform: 'capitalize',
    textAlign: 'left',
    color: 'rgb(145,151,157)',
    border: `1px solid #ccc`,
    borderRadius: '8px',
    marginRight: '2rem',
    backdropFilter: "blur(30px)",
    '&:hover': {
      backgroundColor: "",
      border: `1px solid #ccc`,
    }
  },
  cartButton: {
    background: '#fff',
    fontSize: '0.8rem',
    fontWeight: "bold",
    lineHeight: '1.8rem',
    marginRight: '2rem',
    textTransform: 'capitalize',
    color: "rgb(78, 13, 55)",
    border: `1px solid rgb(224, 227, 231)`,
    borderRadius: '8px',
    backdropFilter: "blur(30px)",
    '&:hover': {
      backgroundColor: "",
      border: `1px solid rgb(224, 227, 231)`,
    }
  }
}))


interface Props {
  window?: () => Window;
  children: React.ReactElement;
}


function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


const NavbarComponent = () => {

  const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);
  const theme = useTheme()
  const classes = useStyles()
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: `0.8px solid rgb(224, 227, 231)`,
          backgroundColor: "#fff",
          backdropFilter: "blur(30px)"
        }}
      >
        <div className="flex justify-center shadow-sm">
          <div className='flex justify-between md:flex md:flex-row md:w-1/2 md:justify-center'>
            <img src="/assets/brand/logo_abaya.png" width={"180"} className="mr-8" />
            <div className="self-center w-full">
              <Tooltip title="Cari produk">
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    background: "#fff",
                    minWidth: '100%',
                    fontSize: '0.8rem',
                    lineHeight: '1.8rem',
                    fontWeight: "bold",
                    textTransform: 'capitalize',
                    textAlign: 'left',
                    color: 'rgb(145,151,157)',
                    border: `1px solid #ccc`,
                    borderRadius: '8px',
                    marginRight: '2rem',
                    backdropFilter: "blur(30px)",
                    '&:hover': {
                      backgroundColor: "",
                      border: `1px solid #ccc`,
                    }
                  }}
                  disableElevation={true}
                  startIcon={
                    <SearchOutlinedIcon color={"primary"} />
                  }
                >
                  Cari...
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </AppBar>
      <Sidebar
        isOpen={isOpenDrawer}
        setIsOpen={setIsOpenDrawer}
      />
    </Box>
  )
}

export default NavbarComponent
