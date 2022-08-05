import React from "react";
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion'
import LabelBottomNavigation from "../BottomNavigation";
import FixedBottomNavigation from "../BottomNavigation";


type LayoutProps = {
  title: string
  children: React.ReactNode
}
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const Layout: React.FC<LayoutProps> = (
  {
    title,
    children
  }
) => {
  return (
    <>
      <NextSeo
        title={title + " - All Busyra Fashion Abaya"}
        description={"Membantu muslimah muda Indonesia bisa tampil syari secara percaya diri."}
      />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear', restDelta: 0.5 }}
      >
      <div className="flex justify-center bg-slate-50 ">
        <div className="md:w-1/2 bg-white mb-12">
          <div className='md:px-12 w-full bg-white mt-4 h-full'>
            {children}
          </div>
        </div>
      </div>
      </motion.main>
      <FixedBottomNavigation/>
    </>
  )
}

export default Layout