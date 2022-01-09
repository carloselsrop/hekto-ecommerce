// Imports
import Navbar from '../components/common/Navbar'
import DemoCarousel from "../components/home/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FeaturedProducts from '../components/home/FeaturedProducts';
import LeatestProducts from '../components/home/LeatestProducts';
import TrendingProducts from '../components/home/TrendingProducts';
import TopCategories from '../components/home/TopCategories';
import NewsletterBanner from '../components/home/NewsletterBanner';
import Brands from '../components/common/Brands';
import Footer from '../components/common/Footer';
import BigTrendingProduct from '../components/home/BigTrendingProduct';

const Home = () => {
  return (
    <div >
      {/* Navbar */}
      <Navbar />
      {/* Carousel */}
      <DemoCarousel />
      {/* Featured Products */}
      <FeaturedProducts />
      {/* Leatest Products */}
      <LeatestProducts />
      {/* Big Trending Product */}
      <BigTrendingProduct />
      {/* Trending Products */}
      <TrendingProducts />
      {/* Top Categories */}
      <TopCategories />
      {/* Newsletter Banner */}
      <NewsletterBanner />
      {/* Brands */}
      <Brands />
      {/* Footer */}
      <Footer />
    </div >
  );
};
export default Home;