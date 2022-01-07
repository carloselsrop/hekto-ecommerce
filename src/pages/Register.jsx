// Imports
import Navbar from '../components/common/Navbar'
import TitlePage from '../components/common/TitlePage'
import Brands from '../components/common/Brands'
import Footer from '../components/common/Footer'
import checkGif from '../static/gif/checkGif.gif'
import errorGif from '../static/gif/errorGif.gif'
import { useState, useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { Link } from 'react-router-dom'


// Component
const Register = () => {
  // Context and State
  const { registerUser } = useContext(AuthContext);

  // Data
  const [successModal, setSuccessModal] = useState(false)
  const [errorModal, setErrorModal] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  // Methods
  const handleChange = ({ target: { value, name } }) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleRegister = () => {
    if ((form.password !== form.password_confirmation) || (form.password === '') || (form.password_confirmation === '') || (form.name === '') || (form.email === '')) {
      setErrorModal(true)
      return
    }
    registerUser(form)
  }

  // Renders
  const renderSuccesModal = () => {
    return (
      <div>
        {successModal &&
          <div className="w-full h-screen flex justify-center items-center fixed bg-black bg-opacity-70 top-0">
            <div className=" px-4 py-4 rounded-md flex flex-col font-body justify-center items-center bg-white">
              <img className="w-24" src={checkGif} alt="" />
              <div className="-mt-4 mb-4">
                Enhorabuelo, te has registrado con éxito!
              </div>
              <Link to="/login">
                <button onClick={() => { setSuccessModal(false) }} className="text-sm bg-hekto-pink px-4 py-1 rounded text-white font-semibold">
                  Aceptar
                </button>
              </Link>
            </div>
          </div>
        }
      </div>
    )
  }
  const renderErrorModal = () => {
    return (
      <div>
        {errorModal &&
          <div className="w-full h-screen flex justify-center items-center fixed bg-black bg-opacity-70 top-0">
            <div className=" px-4 py-4 rounded-md flex flex-col font-body justify-center items-center bg-white">
              <img className="w-24" src={errorGif} alt="" />
              <div className="-mt-4 mb-4">
                Ocurrio un error al registrarte, intenta de nuevo!
              </div>
              <button onClick={() => { setErrorModal(false) }} className="text-sm bg-hekto-pink px-4 py-1 rounded text-white font-semibold">
                Aceptar
              </button>
            </div>
          </div>
        }
      </div>
    )
  }

  // Template
  return (
    <div className="relative">
      <Navbar />
      <TitlePage title="Register" />
      {/* Modals */}
      {renderErrorModal()}
      {renderSuccesModal()}
      {/* Main Content */}
      <div className="w-full flex justify-center py-16">
        <div className=" w-full flex justify-center items-center select-none">
          <div className="w-11/12 sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 shadow-md border border-gray-200 py-8 flex flex-col items-center font-body px-8">
            <div className="font-bold text-xl pb-1">Register</div>
            <div className="font-normal text-xs text-gray-400 pb-4">Please fill in the fields below.</div>
            {/* Name and Last Name */}
            <div className="flex flex-col w-full sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 space-y-4 mb-6">
              <div className="w-full">
                <div className="text-xs text-gray-500 ">
                  Nombre:
                </div>
                <input onChange={handleChange} name="name" value={form.name} className="w-full text-xs border rounded-sm focus:outline-none py-2 px-4 focus:border-gray-500 transition duration-300" type="text" />
              </div>
            </div>
            {/* Email */}
            <div className="w-full mb-6">
              <div className="text-xs text-gray-500">
                Email:
              </div>
              <input onChange={handleChange} name="email" value={form.email} className="w-full text-xs border rounded-sm focus:outline-none py-2 px-4 focus:border-gray-500 transition duration-300" type="email" />
            </div>
            {/* Password */}
            <div className="w-full mb-6">
              <div className="text-xs text-gray-500">
                Password
              </div>
              <input onChange={handleChange} name="password" value={form.password} className="w-full text-xs border rounded-sm focus:outline-none py-2 px-4 focus:border-gray-500 transition duration-300" type="password" />
            </div>
            {/* Confirm Password */}
            <div className="w-full mb-6">
              <div className="text-xs text-gray-500">
                Confirm Password
              </div>
              <input onChange={handleChange} name="password_confirmation" value={form.password_confirmation} className="w-full text-xs border rounded-sm focus:outline-none py-2 px-4 focus:border-gray-500 transition duration-300" type="password" />
            </div>
            {/* Terms and Conditions */}
            <button onClick={handleRegister} className="w-full py-2 text-sm text-white bg-hekto-pink rounded-sm">
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