import React from 'react'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/styles'
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
        border: `1.5px solid ${isActive ? "rgb(78, 13, 55)" : 'transparent'}`,
        borderRadius: '50px',
        fontSize: '0.9em',
        background: isActive ? 'rgb(78, 13, 55) !important' : 'transparent',
        color : isActive ? "#fff" : "rgb(78, 13, 55)",
        fontWeight: "600",
        paddingX: 4,
        paddingY: 0.6,
        textTransform: 'capitalize',
        ":hover": {
          border: `1.5px solid ${isActive ?  "rgb(78, 13, 55)" : "rgb(224, 227, 231)"}`,
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
    <div className='md:flex justify-center bg-slate-50'>
      <div className="md:w-1/2 bg-white">
      <div className="flex overflow-x-auto space-x-2 justify-between px-12 mt-12" style={{marginTop : "30px"}}>
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
      <hr className='mt-8'/>
      </div>
    </div>
  )
}

export default Menu