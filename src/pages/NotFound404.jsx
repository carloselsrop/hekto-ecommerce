import { Link } from 'react-router-dom';
import Brands from '../components/common/Brands';
import TitlePage from '../components/common/TitlePage';
import notfound404 from '../static/img/notfound404.png';

const NotFound404 = () => {
  return (
    <div>
      <TitlePage title="404 Not Found" />
      <div className="flex w-full flex-col justify-center items-center font-body select-none">
        <img className=" w-full sm:w-10/12 xl:w-5/12" src={notfound404} alt="" />
        <Link to="/">
          <button className="bg-hekto-pink px-3 text-sm py-2 rounded-sm text-white mb-8 -mt-2">Back To Home</button>
        </Link>
      </div>
      <Brands />
    </div>
  );
};

export default NotFound404;