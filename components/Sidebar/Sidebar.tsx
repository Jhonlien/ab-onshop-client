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

  const list = () => (
    <Box
      sx={{width : 300, height: '100%', bgcolor: 'background.default'}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Divider />
      <List>
        {['Livia Series', 'Couple Series', 'Prayer Series', 'Khimar'].map((text, index) => (
          <ListItem key={text} sx={{
            fontSize : '10em',
          }}>
            <ListItemButton sx={{
              borderRadius : '10px',
            }}>
              <ListItemText primary={text} />
            </ListItemButton>
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