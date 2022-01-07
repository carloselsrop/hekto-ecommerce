import { Carousel } from "react-responsive-carousel";
import slide1Home from "../../static/img/slide1Home.png"

const DemoCarousel = () => (
  <Carousel className='relative z-40' autoPlay={true} showArrows={false} showStatus={false} interval={5000} infiniteLoop={true} emulateTouch={true} >
    {/* Slide 1 */}
    <div className="bg-purple-100 flex justify-center select-none">
      <div className=" w-10/12 sm:w-8/12 flex items-center py-16 xl:py-0">
        <div className="lg:w-6/12 w-full flex items-start flex-col font-body">
          <div className="text-hekto-pink font-bold text-sm pb-2">Best Furniture For Your Castle....</div>
          <div className="text-5xl text-left font-bold py-6">New Furniture Collection
            Trends in 2020</div>
          <div className="text-sm text-left text-gray-400 pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            in phasellus non in justo.</div>
          <button className="px-4 py-2 rounded bg-hekto-pink text-white text-sm transition duration-300 transform hover:scale-105">Shop Now</button>
        </div>
        <div className="lg:w-6/12 hidden lg:flex items-center justify-center  flex-col font-body xl:p-24">
          <img src={slide1Home} alt="" />
        </div>
      </div>
    </div>
    {/* Slide 2 */}
    <div className="bg-purple-100 flex justify-center select-none">
      <div className=" w-10/12 sm:w-8/12 flex items-center py-16 xl:py-0">
        <div className="lg:w-6/12 w-full flex items-start flex-col font-body">
          <div className="text-hekto-pink font-bold text-sm pb-2">Best Furniture For Your Castle....</div>
          <div className="text-5xl text-left font-bold py-6">New Furniture Collection
            Trends in 2020</div>
          <div className="text-sm text-left text-gray-400 pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            in phasellus non in justo.</div>
          <button className="px-4 py-2 rounded bg-hekto-pink text-white text-sm transition duration-300 transform hover:scale-105">Shop Now</button>
        </div>
        <div className="lg:w-6/12 hidden lg:flex items-center justify-center  flex-col font-body xl:p-24">
          <img src={slide1Home} alt="" />
        </div>
      </div>
    </div>
    {/* Slide 3 */}
    <div className="bg-purple-100 flex justify-center select-none">
      <div className=" w-10/12 sm:w-8/12 flex items-center py-16 xl:py-0">
        <div className="lg:w-6/12 w-full flex items-start flex-col font-body">
          <div className="text-hekto-pink font-bold text-sm pb-2">Best Furniture For Your Castle....</div>
          <div className="text-5xl text-left font-bold py-6">New Furniture Collection
            Trends in 2020</div>
          <div className="text-sm text-left text-gray-400 pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            in phasellus non in justo.</div>
          <button className="px-4 py-2 rounded bg-hekto-pink text-white text-sm transition duration-300 transform hover:scale-105">Shop Now</button>
        </div>
        <div className="lg:w-6/12 hidden lg:flex items-center justify-center  flex-col font-body xl:p-24">
          <img src={slide1Home} alt="" />
        </div>
      </div>
    </div>
  </Carousel>
);

export default DemoCarousel;
