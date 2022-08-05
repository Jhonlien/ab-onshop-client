import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';


export default function FixedBottomNavigation() {

  return (
    <div className="flex justify-center relative">
      <section className="fixed md:w-1/2 mx-auto inset-x-0 bottom-0 z-10 bg-white border-t">
        <div className="flex">
          <a href="#" className="w-full text-black focus:text-pink-900 hover:text-pink-900 justify-center inline-block text-center pt-2 pb-1">
            <img src="/assets/icons/png/home_active.png" width={20} height={20} alt="" className='mx-auto my-2'/>
            <span className="tab tab-home block text-xs font-bold">Home</span>
          </a>
          <a href="#" className="w-full text-slate-400 focus:text-pink-900 hover:text-pink-900 justify-center inline-block text-center pt-2 pb-1">
            <img src="/assets/icons/png/filter.png" width={20} height={20} alt="" className='mx-auto my-2'/>
            <span className="tab tab-home block text-xs font-bold">Kategori</span>
          </a>
          <a href="#" className="w-full text-slate-400 focus:text-pink-900 hover:text-pink-900 justify-center inline-block text-center pt-2 pb-1">
            <img src="/assets/icons/png/shopping-cart.png" width={20} height={20} alt="" className='mx-auto my-2'/>
            <span className="tab tab-home block text-xs font-bold">Keranjang <span className='text-pink-900'>{"(0)"}</span></span>
          </a>
          <a href="#" className="w-full text-slate-400 focus:text-pink-900 hover:text-pink-900 justify-center inline-block text-center pt-2 pb-1">
            <img src="/assets/icons/png/user.png" width={20} height={20} alt="" className='mx-auto my-2'/>
            <span className="tab tab-home block text-xs font-bold">Akun</span>
          </a>
        </div>
      </section>
    </div>
  );
}