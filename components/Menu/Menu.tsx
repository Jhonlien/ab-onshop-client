import React from 'react'
import Button from '@mui/material/Button'
import { makeStyles, useTheme } from '@mui/styles'
import StarIcon from '@mui/icons-material/Star';
import { Divider } from '@mui/material';
import { PageRoute } from '../../routes';
import Link from 'next/link';
import { Utils } from '../../lib/utils';
import { useRouter } from 'next/router';
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
        border: `2px solid ${isActive ? theme?.palette?.color.buttonBorderActive : 'transparent'}`,
        borderRadius: '10px',
        fontSize: '0.9em',
        background: isActive ? 'rgba(78, 13, 55, 0.04)' : 'transparent',
        fontWeight: "bolder",
        paddingX: 4,
        paddingY: 0.6,
        textTransform: 'capitalize',
        ":hover": {
          border: `2px solid ${isActive ? theme?.palette?.color.buttonBorderActive : theme?.palette?.color.buttonBorder}`,
        }
      }}
    >
      {name}
    </Button>
  )
}

const Menu: React.FC = () => {
  const router = useRouter()
  return (
    <div className="flex overflow-x-auto space-x-2 justify-between px-4 md:justify-center">
      
      {
        PageRoute.PAGE_ROUTE.map((menu, index) => (         
          <div className='flex-shrink-0 md:shrink overflow-hidden flex md:flex-row items-center' key={index}>
            <Link href={menu.href}>
              <MenuButton
                name={menu.name}
                isActive={Utils.isActiveLink(menu.href, router.pathname)}
                onClick={() => { }}
                />
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Menu