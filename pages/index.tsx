import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'
import HeroCarousel from '../components/Carousel/HeroCarousel'
import SectionTitle from '../components/Section/SectionTitle'
import ProductCard from '../components/Product/ProductCard'

const Home: NextPage = () => {
  return (
    <div className='md:px-12 mt-8'>
      <Menu />
      <HeroCarousel />

      <div className='flex justify-center'>
        <div className='w-1/2'>
        <SectionTitle />
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='w-1/2'>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 mb-10">
          <ProductCard name='Haifa Series Gamis Set Syari' img_src='https://s3-ap-southeast-1.amazonaws.com/tokotalklive/images/products/146ADED0-9D6C-45CB-B76B-AE1CACD1A19F_1640402638690.jpeg'/>
          <ProductCard name='Haifa Series Gamis Set Syari' img_src='https://s3-ap-southeast-1.amazonaws.com/tokotalklive/images/products/Cover_Web_Aleria_Series_New_Color_2_1652942518680.jpg'/>

        </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Home
