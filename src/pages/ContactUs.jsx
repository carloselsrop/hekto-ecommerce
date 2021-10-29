import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import TitlePage from '../components/common/TitlePage'
import colorBalls from '../static/img/colorBalls.png'
import contactUsImg from '../static/img/contactUsImg.png'

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <TitlePage title="Contact Us" />
      <div className="w-full flex justify-center py-16 select-none">
        <div className="w-10/12 sm:w-8/12 flex flex-col">
          {/* Section 1 - Contact Us */}
          <div className="w-full flex flex-col lg:flex-row justify-between font-body mb-14">
            <div className="lg:w-5/12 w-full pb-16 lg:pb-0">
              <div className="pb-2 text-hekto-navy-blue font-bold  text-2xl">Information About us</div>
              <div className=" text-sm text-gray-400 pb-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam doloremque necessitatibus totam aspernatur vero esse ea unde debitis ex deserunt. asdnkajsn asjdnakjsndjahsbdyuasvdbyb
              </div>
              <img src={colorBalls} alt="" />
            </div>
            <div className="lg:w-6/12 w-full ">
              <div className="pb-4 text-hekto-navy-blue font-bold text-2xl">Contact Way</div>
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-8">
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-hekto-purple rounded-full"></div>
                  <div className="flex flex-col text-sm text-gray-400">
                    <div>Tel: 877-67-88-99</div>
                    <div>E-Mail: shop@store.com</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-hekto-pink rounded-full"></div>
                  <div className="flex flex-col text-sm text-gray-400">
                    <div>Tel: 877-67-88-99</div>
                    <div>E-Mail: shop@store.com</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                  <div className="flex flex-col text-sm text-gray-400">
                    <div>Tel: 877-67-88-99</div>
                    <div>E-Mail: shop@store.com</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                  <div className="flex flex-col text-sm text-gray-400">
                    <div>Tel: 877-67-88-99</div>
                    <div>E-Mail: shop@store.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Section 2 - Contact Us */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-center font-body mb-14">
            <div className="lg:w-5/12 w-full pb-16 lg:pb-0">
              <div className="pb-2 text-hekto-navy-blue font-bold  text-2xl">Get In Touch</div>
              <div className=" text-sm text-gray-400 pb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
              </div>
              <div className="flex flex-col space-y-8 py-4">
                <div className="w-full space-y-8 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-between items-center ">
                  <input className="w-full sm:w-6/12 text-sm px-4 focus:outline-none py-2 rounded-sm border shadow-inner" type="text" placeholder="Your Name *" />
                  <input className="w-full sm:w-6/12 text-sm px-4 focus:outline-none py-2 rounded-sm border shadow-inner" type="email" placeholder="Your Email *" />
                </div>
                <input type="text" className="text-sm px-4 focus:outline-none py-2 rounded-sm border shadow-inner" placeholder="Subject*" />
                <textarea className="resize-none text-sm px-4 focus:outline-none py-2 rounded-sm border shadow-inner" placeholder="Type Your Message*" name="" id="" cols="30" rows="10"></textarea>
                <div>
                  <button className="bg-hekto-pink px-6 py-2 rounded-sm text-white text-sm hover:scale-105 transform transition duration-300">Send Mail</button>
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 w-full">
              <img src={contactUsImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default ContactUs