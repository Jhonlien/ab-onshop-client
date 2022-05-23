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
import StarIcon from '@mui/icons-material/Star';
export const useStyles = makeStyles(theme => ({
  logo: {
    width: '150px',
    marginRight: '2rem'
  },
  searchButton: {
    background: theme.palette.color.buttonBackground,
    minWidth: '100px',
    fontSize: '0.8rem',
    lineHeight: '1.8rem',
    fontWeight: 400,
    textTransform: 'capitalize',
    color: 'rgb(145,151,157)',
    border: `1px solid ${theme.palette.color.buttonBorder}`,
    borderRadius: '10px',
    marginRight: '2rem',
    '&:hover': {
      backgroundColor: theme.palette.color.buttonBackgroundHover,
      border: `1px solid ${theme.palette.color.buttonBorder}`,
    }
  },
  cartButton: { 
    fontSize: '0.8rem',
    fontWeight: "bold",
    lineHeight: '1.8rem',
    marginRight: '2rem',
    textTransform: 'capitalize',
    color: theme.palette.primary,
    border: `1px solid ${theme.palette.color.buttonBorder}`,
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: theme.palette.color.buttonBackgroundHover,
      border: `1px solid ${theme.palette.color.buttonBorder}`,
    }
  }
}))

const NavbarComponent: React.FC = () => {

  const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);
  const theme = useTheme();
  const classes = useStyles()
  const colorMode = React.useContext(ColorModeContext);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          bgcolor: 'background.default',
          borderBottom : `0.8px solid ${theme.palette.border}`
        }}
      >
        <div className="flex justify-center items-scretch shadow-sm py-2">
          {theme?.palette?.mode === 'dark' && (
            <img src="/assets/brand/logo_abaya-white1.png" className={classes.logo} />
          )}

          {theme?.palette?.mode === 'light' && (
            <img src="/assets/brand/logo_abaya.png" className={classes.logo} />
          )}

          <div className="self-center">
            <Tooltip title="Cari produk">
              <Button
                variant="outlined"
                size="small"
                className={classes.searchButton}
                disableElevation={true}
                startIcon={
                  <SearchOutlinedIcon color={"primary"} />
                }
              >
                Cari...
              </Button>
            </Tooltip>
          </div>

          <div className="self-center hidden md:block">
            <Tooltip title="Keranjang">
              <Button
                variant="outlined"
                onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                size="small"
                className={classes.cartButton}
                disableElevation={true}
                startIcon={
                  <ShoppingCartOutlinedIcon color={"primary"} />
                }
              >
                0
              </Button>
            </Tooltip>
          </div>

          <div className="self-center hidden md:block">
            <Tooltip title="Lihat kategori">
              <Button
                variant="outlined"
                onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                size="small"
                className={classes.cartButton}
                disableElevation={true}
                startIcon={
                  <FeaturedPlayListIcon color={"primary"} />
                }
              >
               Kategori
              </Button>
            </Tooltip>
          </div>

          <div className="self-center md:px-4">
            <Tooltip title={`Ubah ke ${theme?.palette?.mode === 'dark' ? 'Mode Terang' : 'Mode Gelap'}`}>
              <IconButton aria-label="delete" onClick={colorMode.toggleColorMode}>
                {theme?.palette?.mode === 'light' && (
                  <Brightness4Icon color='primary'/>)}
                {theme?.palette?.mode === 'dark' && (
                  <Brightness7Icon color='primary' />)}
              </IconButton>
            </Tooltip>
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
