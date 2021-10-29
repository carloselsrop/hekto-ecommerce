// Imports
import { useState } from 'react';
import TitlePage from '../components/common/TitlePage';
import Brands from '../components/common/Brands';
import Navbar from '../components/common/Navbar';

const Login = () => {
  // Methods
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const handleChange = ({ target: { value, name } }) => {
    setForm({
      ...form,
      [name]: value
    });
  };

  // Template
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      <TitlePage title="Login" />
      <div className="py-28 w-full flex justify-center items-center select-none">
        <div className="w-11/12 sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 shadow-md border border-gray-200 py-8 flex flex-col items-center font-body px-8">
          <div className=" font-bold text-xl pb-1">Login</div>
          <div className=" font-normal text-xs text-gray-400 pb-4">Please login using account detail bellow.</div>
          <div className="flex flex-col w-full space-y-4 pb-3">
            <input onChange={handleChange} name="email" value={form.email} type="email" className="w-full py-2 placeholder-gray-300 rounded-sm shadow-sm focus:outline-none border px-4 text-sm" placeholder="Email address" />
            <input onChange={handleChange} name="password" value={form.password} type="password" className="w-full py-2 placeholder-gray-300 rounded-sm shadow-sm focus:outline-none border px-4 text-sm" placeholder="Password" />
          </div>
          <div className="w-full flex">
            <button className="text-xs text-gray-400 hover:text-black transition duration-300 pb-4">Forgot password?</button>
          </div>
          <button className=" bg-hekto-pink w-full py-2 rounded-sm text-white text-sm mb-4">Sign In</button>
          <div className="text-xs text-gray-400">Don’t have an Account? <button className="border-b text-hekto-off-navy-blue border-hekto-off-navy-blue"> Create account</button></div>
        </div>
      </div>
      <Brands />
    </div>
  );
};

export default Login;