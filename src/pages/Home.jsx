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
import TrendProduct from '../static/img/trendImg.png'

const Home = () => {
  // Template
  return (
    <div className='relative'>
      {/* Navbar */}
      <Navbar />
      {/* Carousel */}
      <DemoCarousel />
      {/* Featured and Leatest Products */}
      <div className="w-full flex justify-center font-body select-none">
        <div className="w-10/12 sm:w-8/12 flex flex-col py-4">
          {/* Featured Products */}
          <FeaturedProducts />
          {/* Leatest Products */}
          <LeatestProducts />
        </div>
      </div>
      {/* Big Trending Product */}
      <div className="bg-purple-100 w-full flex justify-center mb-16">
        <div className=" w-10/12 sm:w-8/12 flex justify-center items-center font-body">
          <div className="w-6/12">
            <img src={TrendProduct} alt="" />
          </div>
          <div className="w-6/12 space-y-8">
            <div className=" text-hekto-navy-blue text-4xl font-bold">Unique Features Of leatest &
              Trending Poducts</div>
            <div className="flex flex-col items-start space-y-2">
              <div className="text-sm text-gray-400 flex space-x-2 items-center">
                <div className="w-2 h-2 rounded-full bg-hekto-pink"></div>
                <div>All frames constructed with hardwood solids and laminates</div>
              </div>
              <div className="text-sm text-gray-400 flex space-x-2 items-center">
                <div className="w-2 h-2 rounded-full bg-hekto-blue"></div>
                <div>Reinforced with double wood dowels, glue, screw - nails corner
                  blocks and machine nails</div>
              </div>
              <div className="text-sm text-gray-400 flex space-x-2 items-center">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <div>Arms, backs and seats are structurally reinforced</div>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <button className="px-4 py-2 rounded text-white text-sm bg-hekto-pink hover:scale-105 transform transition duration-300">
                Add to Cart
              </button>
              <div className="flex flex-col space-y-1 text-xs text-hekto-off-navy-blue">
                <div>R&D Sofa</div>
                <div>$89.99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trending Products */}
      <div className="w-full flex justify-center font-body select-none">
        <div className="w-10/12 sm:w-8/12 flex flex-col py-4">
          {/* Trending Products */}
          <TrendingProducts />
        </div>
      </div>
      {/* Top Categories */}
      <div className="w-full flex justify-center font-body select-none">
        <div className="w-10/12 sm:w-8/12 flex flex-col py-4">
          {/* Top Products */}
          <TopCategories />
        </div>
      </div>
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