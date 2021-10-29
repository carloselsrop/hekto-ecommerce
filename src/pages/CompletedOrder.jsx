import Brands from '../components/common/Brands';
import TitlePage from '../components/common/TitlePage';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import checkImg from '../static/img/check.PNG';
import clockImg from '../static/img/clock.png';
import checkListImg from '../static/img/checklist.png';
import horizontalLine from '../static/img/horizontalLine.PNG';
import verticalLine from '../static/img/verticalLine.PNG';

const CompletedOrder = () => {
  return (
    <div>
      <Navbar />
      <TitlePage title="Completed Order" />
      {/* De momento solo en breakpoints mayores a 2xl */}
      <div className="w-full flex justify-center py-20 select-none ">
        <div className="w-5/12  relative py-16 flex flex-col items-center font-body">
          <img className="absolute left-6 top-16 w-4" src={verticalLine} alt="" />
          <img className="absolute right-6 bottom-0 w-16" src={checkListImg} alt="" />
          <img className="absolute left-10 bottom-6 w-10/12" src={horizontalLine} alt="" />
          <img className="absolute left-0 top-4 w-16" src={clockImg} alt="" />
          <img src={checkImg} alt="Completed Order" />
          <div className="text-hekto-navy-blue font-bold text-2xl pt-2 pb-1">
            Your Order Is Completed!
          </div>
          <div className=" text-center w-8/12 text-xs text-gray-400 pt-1 pb-4">
            Thank you for your order! Your order is being processed and will be completed within 3-6
            hours. You will receive an email confirmation when your order is completed.
          </div>
          <button className="px-2 py-3 rounded-sm text-sm bg-hekto-pink text-white hover:scale-110 transform transition duration-300">
            Continue Shopping
          </button>
        </div>

      </div>
      <Brands />
      <Footer />
    </div>
  );
};

export default CompletedOrder;