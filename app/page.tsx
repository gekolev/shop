import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export const config = {
  runtime: 'nodejs', // Use Node.js runtime instead of Edge runtime
};

export default function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
