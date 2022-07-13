import type {NextPage} from 'next'
import Layout from '../../components/Layout'
import Menu from '../../components/Menu'
import SectionTitle from '../../components/Section/SectionTitle'
import Hero from '../../components/Carousel/Hero'
const BestSeller : NextPage = () => {
  return (
    <Layout title='Best Seller'>
      <Hero
        title='Best Seller'
        desc='Lihat semua produk terfavorit dari All Busyra '
        imageUrl='https://s3-ap-southeast-1.amazonaws.com/tokotalklive/images/products/146ADED0-9D6C-45CB-B76B-AE1CACD1A19F_1640402638690.jpeg'
      />
    </Layout>
  )
}

export default BestSeller