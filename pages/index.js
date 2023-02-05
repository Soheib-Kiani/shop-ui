// # COMPONENTS
import Layout from '@/components/Layout';
import Carousel from '@/components/carousel';
import Category from '@/components/category';

export default function Home() {

  return (
    <Layout title="Home">
      <Carousel />
      <Category />
    </Layout>
  );
}
