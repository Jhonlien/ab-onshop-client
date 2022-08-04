import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { styled } from '@mui/material/styles';
import { makeStyles, useTheme } from '@mui/styles'


type SidebarProps = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type MenuButtonProps = {
  name: string
  href?: string
  isActive: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  name,
  href,
  isActive = true,
  onClick
}) => {
  const theme = useTheme()
  return (
    <Button
      variant="outlined"
      size="small"
      disableElevation={true}
      onClick={onClick}
      sx={{
        border: `2px solid ${isActive ? "rgb(78, 13, 55)" : 'transparent'}`,
        width: '100%',
        textAlign: 'left',
        borderRadius: '10px',
        fontSize: '0.9em',
        background: isActive ? 'rgba(78, 13, 55, 0.04)' : 'transparent',
        fontWeight: "bolder",
        paddingX: 4,
        paddingY: 0.6,
        textTransform: 'capitalize',
        ":hover": {
          border: `2px solid ${isActive ? "rgb(78, 13, 55)" : "rgb(224, 227, 231)"} `,
        }
      }}
    >
      {name}
    </Button>
  )
}


const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  setIsOpen
}) => {

  const theme = useTheme()

  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
        setIsOpen(!open);
      };

  const LIST = [
    {
      name: 'Livia Series',
      isActive: true
    },
    {
      name: 'Couple Series',
      isActive: false
    },
    {
      name: 'Gamis Series',
      isActive: false
    },

    {
      name: 'Kids Series',
      isActive: false
    },

    {
      name: 'Family Series',
      isActive: false
    },

  ]
  const list = () => (
    <Box
      sx={{ width: 350, height: '100%', bgcolor: 'background.default' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {LIST.map((text, index) => (
          <ListItem key={text.name}>
            <MenuButton
              name={text.name}
              isActive={text.isActive}
              onClick={() => { }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor={'left'}
      open={isOpen}
      onClose={toggleDrawer(isOpen)}
    >
      {list()}
    </Drawer>
  )
}

export default Sidebar