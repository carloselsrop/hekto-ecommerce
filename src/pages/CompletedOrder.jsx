import Brands from '../components/common/Brands';
import TitlePage from '../components/common/TitlePage';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import checkImg from '../static/img/check.PNG';
import { useHistory } from 'react-router-dom';

const CompletedOrder = () => {
  const history = useHistory();

  const handleCompleteOrder = () => {
    history.push('/');
  }

  return (
    <div>
      <Navbar />
      <TitlePage title="Completed Order" />
      {/* De momento solo en breakpoints mayores a 2xl */}
      <div className="w-full flex justify-center py-20 select-none ">
        <div className=" py-16 flex flex-col items-center font-body">
          <img src={checkImg} alt="Completed Order" />
          <div className="text-hekto-navy-blue font-bold text-2xl pt-2 pb-1">
            Your Order Is Completed!
          </div>
          <div className=" text-center w-8/12 text-xs text-gray-400 pt-1 pb-4">
            Thank you for your order! Your order is being processed and will be completed within 3-6
            hours. You will receive an email confirmation when your order is completed.
          </div>
          <button onClick={handleCompleteOrder} className="p-3 rounded-md text-sm bg-hekto-pink text-white hover:scale-110 transform transition duration-300">
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