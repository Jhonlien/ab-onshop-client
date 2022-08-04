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
import ProductCardLoad from '../components/Product/ProductCardLoad'
import HeroCarouselLoad from '../components/Carousel/HeroCarouselLoad'
import CategoryCard from '../components/Category/CategoryCard'
import { Button } from '@mui/material'
import { useTheme } from "@mui/styles";
import Layout from '../components/Layout'

const Home: NextPage = () => {

  const theme = useTheme()

  return (
    <Layout title='Home'>
      {/* <HeroCarousel /> */}
      {/* <HeroCarouselLoad /> */}

      <div className='flex mx-4 md:mx-0'>
        <div className='w-1/2'>
          <SectionTitle title='Produk Terbaru' />
        </div>
      </div>

      <div className='flex mx-4 md:mx-0'>
        <div className="w-full">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 mb-10">
            <ProductCard name='Haifa Series Gamis Set Syari' img_src='https://s3-ap-southeast-1.amazonaws.com/tokotalklive/images/products/146ADED0-9D6C-45CB-B76B-AE1CACD1A19F_1640402638690.jpeg' />
            <ProductCard name='Haifa Series Gamis Set Syari' img_src='https://s3-ap-southeast-1.amazonaws.com/tokotalklive/images/products/Cover_Web_Aleria_Series_New_Color_2_1652942518680.jpg' />
          </div>
        </div>
      </div>

      <div className='flex mb-8'>
        <div className='w-full'>
          <Button
            variant="outlined"
            size="small"
            disableElevation={true}
            sx={{
              border: `2px solid rgb(224, 227, 231)`,
              borderRadius: '10px',
              fontSize: '0.8em',
              width : "100%",
              fontWeight: "bolder",
              paddingX: 4,
              paddingY: 0.6,
              textTransform: 'capitalize',
              ":hover": {
                border: `2px solid rgb(78, 13, 55) `,
              }
            }}
          >
            Tampilkan semua produk
          </Button>
        </div>
      </div>


      <div className='flex md:mx-0'>
        <div className='w-full'>
          <SectionTitle title='Kategori' />
        </div>
      </div>

      <div className='flex mx-4 md:mx-0'>
        <div className='w-full'>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 mb-10">
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>
      </div>

      

      <div className='flex mx-4 md:mx-0'>
      <div className='w-full'>
          <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4 mb-10">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />

          </div>

        </div>
      </div>

      <div className='flex mb-8'>
        <div className='w-full'>
          <Button
            variant="outlined"
            size="small"
            disableElevation={true}
            sx={{
              border: `2px solid rgb(224, 227, 231)`,
              borderRadius: '10px',
              fontSize: '0.8em',
              width : "100%",
              fontWeight: "bolder",
              paddingX: 4,
              paddingY: 0.6,
              textTransform: 'capitalize',
              ":hover": {
                border: `2px solid rgb(78, 13, 55)`,
              }
            }}
          >
            Tampilkan semua kategori
          </Button>
        </div>
      </div>

    </Layout>
  )
}

export default Home
