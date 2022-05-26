import type {NextPage} from 'next'
import Layout from '../../components/Layout'
import Menu from '../../components/Menu'
import SectionTitle from '../../components/Section/SectionTitle'
import ProductCard from '../../components/Product/ProductCard'
import HeroCarousel from '../../components/Carousel/HeroCarousel'
import Hero from '../../components/Carousel/Hero'

const AllItem : NextPage = () => {
  return (
    <Layout title='All Item'>
      <Menu />
      <Hero
        title='All Item'
        desc='Lihat semua produk terbaru dari All Busyra'
        imageUrl='https://s3-ap-southeast-1.amazonaws.com/tokotalklive/images/products/146ADED0-9D6C-45CB-B76B-AE1CACD1A19F_1640402638690.jpeg'
      />
      <div className='flex md:justify-center mx-4 md:mx-0'>
        <div className='md:w-1/2 w-full'>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 mb-10">
            <ProductCard name='Haifa Series Gamis Set Syari' img_src='https://s3-ap-southeast-1.amazonaws.com/tokotalklive/images/products/146ADED0-9D6C-45CB-B76B-AE1CACD1A19F_1640402638690.jpeg' />
            <ProductCard name='Haifa Series Gamis Set Syari' img_src='https://s3-ap-southeast-1.amazonaws.com/tokotalklive/images/products/Cover_Web_Aleria_Series_New_Color_2_1652942518680.jpg' />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AllItem