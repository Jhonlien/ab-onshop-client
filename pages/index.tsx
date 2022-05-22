import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='md:px-24 mt-8'>
      <Menu />
    </div>
  )
}

export default Home
