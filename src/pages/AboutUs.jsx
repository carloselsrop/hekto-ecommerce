// Components
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import TitlePage from '../components/common/TitlePage';

// Static
import aboutImg from '../static/img/aboutImg.png';
import freedeliveryImg from '../static/img/freedeliveryImg.png';
import hoursImg from '../static/img/24hoursImg.png';
import cashbackImg from '../static/img/cashbackImg.png';
import premiumImg from '../static/img/premiumImg.png';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <TitlePage title="About Us" />
      <div className="w-full flex justify-center py-16 select-none">
        <div className="w-8/12 font-body">
          {/* Image and Text - About Us */}
          <div className="w-full flex flex-col lg:justify-between lg:flex-row lg:items-center mb-36">
            <div className="w-full lg:w-6/12 flex justify-center lg:justify-start mb-8 lg:mb-0">
              <img src={aboutImg} alt="" />
            </div>
            <div className="w-full lg:w-5/12 font-body flex flex-col justify-start">
              <div className="pb-4 text-3xl text-hekto-navy-blue font-bold text-center lg:text-left">
                Know About Our Ecomerce
                <div>
                  Business, History
                </div>
              </div>
              <div className="pb-8 text-hekto-off-navy-blue text-opacity-70 text-center lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
              </div>
              <div className="flex justify-center lg:justify-start">
                <Link to="/contact">
                  <button className="bg-hekto-pink px-4 py-2 rounded-sm text-white transform hover:scale-105 transition duration-300 ">Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
          {/* Our Features Grid */}
          <div className="mb-36">
            <div className="text-black font-bold text-center text-3xl pb-8">Our Features</div>
            <div className=" w-full grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 grid-cols-1">
              <div className="flex flex-col items-center p-8 bg-hekto-sky-blue transition duration-300 cursor-pointer hover:shadow-inner rounded-sm hover:border-yellow-500 border-b-2 border-transparent  space-y-4">
                <img className="w-16" src={freedeliveryImg} alt="" />
                <div className="text-hekto-off-navy-blue font-semibold">
                  Free Delivery
                </div>
                <div className="text-center text-xs px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, iste rerum.</div>
              </div>
              <div className="flex flex-col items-center p-8 bg-hekto-sky-blue transition duration-300 cursor-pointer hover:shadow-inner rounded-sm hover:border-yellow-500 border-b-2 border-transparent  space-y-4">
                <img className="w-16" src={hoursImg} alt="" />
                <div className="text-hekto-off-navy-blue font-semibold">
                  24/7 Support
                </div>
                <div className="text-center text-xs px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, iste rerum.</div>
              </div>
              <div className="flex flex-col items-center p-8 bg-hekto-sky-blue transition duration-300 cursor-pointer hover:shadow-inner rounded-sm hover:border-yellow-500 border-b-2 border-transparent space-y-4">
                <img className="w-16" src={cashbackImg} alt="" />
                <div className="text-hekto-off-navy-blue font-semibold">
                  100% Cash-Back
                </div>
                <div className="text-center px-4 text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, iste rerum.</div>
              </div>
              <div className="flex flex-col items-center p-8 bg-hekto-sky-blue transition duration-300 cursor-pointer hover:shadow-inner rounded-sm hover:border-yellow-500 border-b-2 border-transparent space-y-4">
                <img className="w-16" src={premiumImg} alt="" />
                <div className="text-hekto-off-navy-blue font-semibold">
                  Quality Products
                </div>
                <div className="text-center text-xs px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, iste rerum.</div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </div >
  )
}

export default AboutUs;