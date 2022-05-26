import React from "react";
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion'


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
        <div className='md:px-12 mt-24'>
          {children}
        </div>
      </motion.main>
    </>
  )
}

export default Layout