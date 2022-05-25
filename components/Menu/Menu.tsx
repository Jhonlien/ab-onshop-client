import React from 'react'
import Button from '@mui/material/Button'
import { makeStyles, useTheme } from '@mui/styles'
import StarIcon from '@mui/icons-material/Star';
import { Divider } from '@mui/material';
type MenuButtonProps = {
  name: string
  href?: string
  isActive : boolean
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
      onClick={ onClick }
      sx={{
        border: `2px solid ${isActive? theme.palette.color.buttonBorderActive : 'transparent'}`,
        borderRadius : '10px',
        fontSize : '0.9em',
        background : isActive? 'rgba(78, 13, 55, 0.04)' : 'transparent',
        fontWeight : "bolder",
        paddingX: 4,
        paddingY: 0.6,
        textTransform : 'capitalize',
        ":hover" : {
          border: `2px solid ${isActive? theme.palette.color.buttonBorderActive : theme.palette.color.buttonBorder}`,  
        }
      }}
    >
      {name}
    </Button>
  )
}

const Menu: React.FC = () => {
  return (
    <div className="flex  overflow-x-auto space-x-2 md:space-x-6 justify-between px-4 md:justify-center">
      <div className='flex-shrink-0 md:shrink overflow-hidden flex md:flex-row items-center'>
        <MenuButton 
          name='Home'
          isActive={true}
          onClick={() => {}}
          />
      </div>
      
      <div className='flex-shrink-0 md:shrink overflow-hidden flex md:flex-row items-center'>
        <MenuButton 
          name='All Item'
          isActive={false}
          onClick={() => {}}
          />
      </div>
      <div className='flex-shrink-0 md:shrink overflow-hidden flex md:flex-row items-center'>
        <MenuButton 
          name='Best Seller'
          isActive={false}
          onClick={() => {}}
          />
      </div>
      <div className='flex-shrink-0 md:shrink overflow-hidden flex md:flex-row items-center'>
        <MenuButton 
          name='About'
          isActive={false}
          onClick={() => {}}
          />
      </div>
    </div>
  )
}

export default Menu