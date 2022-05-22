import React from 'react'
import Button from '@mui/material/Button'
import { makeStyles, useTheme } from '@mui/styles'

type MenuButtonProps = {
  name: string
  href?: string
  isActive : boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const MenuButton: React.FC<MenuButtonProps> = ({
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
        border: `1px solid ${isActive? theme.palette.color.buttonBorder : 'transparent'}`,
        borderRadius : '10px',
        fontSize : '0.9em',
        backgroundColor : 'color.buttonBackground',
        fontWeight : isActive ? 600 : 500,
        paddingX: 4,
        paddingY: 0.5,
        textTransform : 'capitalize'
        // ":hover" : {
          
        // }
      }}
    >
      {name}
    </Button>
  )
}

const Menu: React.FC = () => {
  return (
    <div className="flex overflow-x-auto space-x-6 justify-between px-4 md:justify-center">
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