// # COMPONENTS
import Layout from '@/components/Layout';
import Carousel from '@/components/carousel';
import Category from '@/components/category';
import Brande from '@/components/brand';
import Products from '@/components/products';
import MostSale from '@/components/mostsale';

export default function Home() {

  return (
    <Layout title="Home">
      <Carousel />
      <Category />
      <Brande />
      <Products />
      <MostSale />
    </Layout>
  );
}
