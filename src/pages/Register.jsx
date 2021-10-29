import Navbar from '../components/common/Navbar'
import TitlePage from '../components/common/TitlePage'
import Brands from '../components/common/Brands'
import Footer from '../components/common/Footer'

const Register = () => {
  return (
    <div>
      <Navbar />
      <TitlePage title="Register" />
      <div className="w-full flex justify-center py-16">
        <div className=" w-full flex justify-center items-center select-none">
          <div className="w-11/12 sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 shadow-md border border-gray-200 py-8 flex flex-col items-center font-body px-8">
            <div className=" font-bold text-xl pb-1">Register</div>
            <div className=" font-normal text-xs text-gray-400 pb-4">Please fill in the fields below.</div>
            {/* Name and Last Name */}
            <div className="flex flex-col w-full sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 space-y-4 mb-6">
              <div className="w-full sm:w-6/12 ">
                <div className="text-xs text-gray-500 ">
                  Nombre:
                </div>
                <input className="w-full text-xs border rounded-sm focus:outline-none py-2 px-4 focus:border-gray-500 transition duration-300" type="text" />
              </div>
              <div className="w-full sm:w-6/12">
                <div className="text-xs text-gray-500">
                  Apellidos:
                </div>
                <input className="w-full text-xs border rounded-sm focus:outline-none py-2 px-4 focus:border-gray-500 transition duration-300" type="text" />
              </div>
            </div>
            {/* Email */}
            <div className="w-full mb-6">
              <div className="text-xs text-gray-500">
                Email:
              </div>
              <input className="w-full text-xs border rounded-sm focus:outline-none py-2 px-4 focus:border-gray-500 transition duration-300" type="email" />
            </div>
            {/* Password */}
            <div className="w-full mb-6">
              <div className="text-xs text-gray-500">
                Password
              </div>
              <input className="w-full text-xs border rounded-sm focus:outline-none py-2 px-4 focus:border-gray-500 transition duration-300" type="password" />
            </div>
            {/* Confirm Password */}
            <div className="w-full mb-6">
              <div className="text-xs text-gray-500">
                Confirm Password
              </div>
              <input className="w-full text-xs border rounded-sm focus:outline-none py-2 px-4 focus:border-gray-500 transition duration-300" type="password" />
            </div>
            {/* Terms and Conditions */}
            <button className="w-full py-2 text-sm text-white bg-hekto-pink rounded-sm">
              Register
            </button>
          </div>
        </div>
      </div>
      <Brands />
      <Footer />
    </div>
  )
}

export default Register