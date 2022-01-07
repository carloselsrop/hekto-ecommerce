import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import TitlePage from '../components/common/TitlePage'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/authContext'

const MyAccount = () => {
  // State and Context
  const { user, updateUser } = useContext(AuthContext)
  const [userForm, setUserForm] = useState()

  // Effects
  useEffect(() => {
    if (user) {
      setUserForm({ ...user })
    }
  }, [user])

  // Methods
  const handleChange = (e) => {
    const { name, value } = e.target
    setUserForm({ ...userForm, [name]: value })
  }
  const handleUpdate = () => {
    updateUser(userForm)
  }

  return (
    <div>
      <Navbar />
      <TitlePage title="My Account" />
      <div className="w-full flex justify-center font-body select-none">
        <div className="w-10/12 sm:w-8/12 flex flex-col py-14">
          <div className="text-xl text-hekto-off-navy-blue font-bold pb-8">
            Welcome to your account page User.
          </div>
          <div className="w-full flex flex-col lg:items-start lg:flex-row justify-between lg:space-x-8">
            {
              userForm &&
              <div className="w-full lg:w-8/12 p-8 bg-hekto-sky-blue mb-8 lg:mb-0">
                <div className="pb-4">Personal Information</div>
                <div className="space-y-8">
                  <div>
                    <input onChange={handleChange} name="name" value={userForm.name} className="w-full py-2 text-sm text-hekto-off-navy-blue placeholder-hekto-off-navy-blue bg-transparent border-b placeholder-opacity-80 border-hekto-off-navy-blue border-opacity-30 focus:outline-none px-2" type="text" placeholder="Full Name" />
                  </div>
                  <div>
                    <input onChange={handleChange} name="email" value={userForm.email} className="w-full py-2 text-sm text-hekto-off-navy-blue placeholder-hekto-off-navy-blue bg-transparent border-b placeholder-opacity-80 border-hekto-off-navy-blue border-opacity-30 focus:outline-none px-2" type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input onChange={handleChange} name="phone" value={userForm.phone} className="w-full py-2 text-sm text-hekto-off-navy-blue placeholder-hekto-off-navy-blue bg-transparent border-b placeholder-opacity-80 border-hekto-off-navy-blue border-opacity-30 focus:outline-none px-2" type="text" placeholder="(+001) Phone Number" />
                  </div>
                  <div>
                    <input onChange={handleChange} name="country" value={userForm.country} className="w-full py-2 text-sm text-hekto-off-navy-blue placeholder-hekto-off-navy-blue bg-transparent border-b placeholder-opacity-80 border-hekto-off-navy-blue border-opacity-30 focus:outline-none px-2" type="text" placeholder="Country" />
                  </div>
                  <div>
                    <input onChange={handleChange} name="address" value={userForm.address} className="w-full py-2 text-sm text-hekto-off-navy-blue placeholder-hekto-off-navy-blue bg-transparent border-b placeholder-opacity-80 border-hekto-off-navy-blue border-opacity-30 focus:outline-none px-2" type="text" placeholder="Address" />
                  </div>
                  <div>
                    <input onChange={handleChange} name="zip" value={userForm.zip} className="w-full py-2 text-sm text-hekto-off-navy-blue placeholder-hekto-off-navy-blue bg-transparent border-b placeholder-opacity-80 border-hekto-off-navy-blue border-opacity-30 focus:outline-none px-2" type="text" placeholder="Zip Code" />
                  </div>
                </div>
                <div className='flex justify-end pt-8'>
                  <button className=' bg-hekto-off-navy-blue px-4 py-2 text-sm text-white rounded hover:bg-opacity-80 transition duration-300' onClick={handleUpdate}>Actualizar Informacion</button>
                </div>
              </div>
            }
            <div className="w-full lg:w-4/12 bg-hekto-pantone-purple p-8">
              <div className="pb-4">
                Lastest Buys
              </div>
              <div className="flex flex-col space-y-4">
                <div className="w-full border rounded-md flex py-1">
                  <div className="w-4/12">
                    <img className="w-full" src="https://i.pinimg.com/originals/77/d7/a5/77d7a5e8376eed741e24c2b05f669e8d.png" alt="" />
                  </div>
                  <div className="w-8/12 px-2 flex items-center">
                    <div className="text-sm text-hekto-navy-blue font-semibold">
                      <div>SmartWatch</div>
                      <div>Quantity: 2</div>
                      <div>Price: $32.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default MyAccount