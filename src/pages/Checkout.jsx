import Navbar from '../components/common/Navbar'
import TitlePage from '../components/common/TitlePage'
import { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext';

const Checkout = () => {
  // Context and State
  const { cart, handleEmptyCart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState([
    {
      id: 1,
      name: 'Paypal',
      img: 'https://logodownload.org/wp-content/uploads/2014/10/paypal-logo-0.png'
    },
    {
      id: 2,
      name: 'Credit Card',
      img: 'https://cdn-icons-png.flaticon.com/512/214/214859.png'
    },
  ]);
  const [togglePaymentMethod, setTogglePaymentMethod] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    {
      value: '',
      label: '',
      img: ''
    }
  );
  const [toggleAddress, setToggleAddress] = useState(false);

  // Methods
  const handlePaymentMethod = (item) => {
    setSelectedPaymentMethod({
      value: item.id,
      label: item.name,
      img: item.img
    });
  }
  const togglePaymentMethods = () => {
    setTogglePaymentMethod(!togglePaymentMethod);
  }
  const toggleAddressButton = () => {
    setToggleAddress(!toggleAddress);
  }

  console.log(toggleAddress);


  return (
    <div>
      <Navbar />
      <TitlePage title="Checkout" />
      <div className='w-full flex flex-col items-center'>
        {/* Resume of the Page */}
        <div className='w-8/12 flex flex-col'>
          <div className='w-8/12 pr-4 py-4'>
            <div className=' text-hekto-off-navy-blue font-bold font-body pb-2'>
              ¿Cómo deseas recibir tus productos?
            </div>
            <div className='pb-2  font-body text-sm text-gray-500 '>
              Podemos enviar tus órdenes hasta la puerta de tu casa o puedes recogerlas en bodega. Tú escoges.
            </div>
            <div className='flex justify-end space-x-3 text-gray-500 font-body text-sm items-center'>
              <span>Recoger en tienda</span>
              <button onClick={toggleAddressButton} className={`w-12 rounded-2xl h-6 border border-gray-300 transition duration-300 flex items-center ${toggleAddress ? 'bg-blue-600' : ' bg-gray-300'}`}>
                <button className={`transform transition duration-300 w-6 h-6 bg-white border border-gray-400 shadow-md rounded-full ${toggleAddress ? 'translate-x-full' : ' translate-x-0'}`}></button>
              </button>
            </div>
          </div>
        </div>
        {/* Big DIV */}
        <div className='w-8/12 flex space-x-4 justify-between items-start mt-2'>
          {/* Left Container */}
          <div className='rounded-md flex flex-col w-8/12 '>
            <div className='bg-hekto-sky-blue  rounded-md border border-gray-300 shadow-sm divide-y divide-gray-300 mb-16'>
              {/* Payment Methods */}
              <div className='p-4'>
                <div className='text-lg font-bold text-hekto-navy-blue font-body pb-4'>Metodo de pago</div>
                <div className='w-full flex space-x-4'>
                  <div className='w-4/12'>
                    <div className='pb-2 font-body text-base'>
                      Selecciona el metodo que deseas utilizar
                    </div>
                    <button onClick={togglePaymentMethods} className={`flex mb-0.5 h-12 select-none space-x-2 justify-between w-full py-4 px-3 text-sm rounded-md font-bold font-body text-hekto-navy-blue shadow-lg bg-white items-center`}>
                      {
                        selectedPaymentMethod.label === ''
                          ? null
                          : <img className='w-8 h-8' src={selectedPaymentMethod.img} alt="" />
                      }
                      <span className='w-11/12 text-left'>
                        {selectedPaymentMethod.label || 'Selecciona un método de pago'}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5  transform transition duration-300 ${togglePaymentMethod ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div className={`bg-white rounded-md divide-y w-full flex flex-col transform transition py-1 duration-150 ${togglePaymentMethod ? 'scale-100' : 'scale-0'}`}>
                      {paymentMethod.map((item) => {
                        return (
                          <button key={item.id} className={`flex items-center justify-between space-x-2 py-1 px-4 w-full transition duration-300 font-bold font-body text-sm text-hekto-navy-blue hover:bg-hekto-sky-blue ${selectedPaymentMethod.id === item.id ? 'bg-hekto-sky-blue' : ''}`} onClick={() => { handlePaymentMethod(item) }}>
                            <div className='flex items-center space-x-2'>
                              <img className='w-8' src={item.img} alt="" />
                              <span>{item.name}</span>
                            </div>
                            <div>{selectedPaymentMethod.value === item.id ? <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-hekto-blue" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                              : null
                            }
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                  <div className='w-6/12'>
                    <div className='font-bold font-body pb-2'>No tienes métodos de pago</div>
                    <div className=' text-gray-400 font-body text-sm'>Agrega los datos de tu tarjeta de débito o crédito dando click en la opción editar.</div>
                  </div>
                  <div className='w-2/12'>
                    <button className='flex space-x-2 bg-hekto-off-navy-blue text-white font-bold font-body px-2 rounded-md py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                      </svg>
                      <span>Editar</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Directions */}
              <div className='p-4'>
                <div className='text-lg font-bold text-hekto-navy-blue font-body pb-4'>Metodo de pago</div>
                <div>
                  <div>
                    <div>
                      No tienes direcciones agregadas</div>
                    <div>Agrega una dirección de envío</div>
                  </div>
                  <div>
                    <button></button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=' text-hekto-off-navy-blue font-bold font-body pb-2'>Detalle de productos y envío</div>
              <div className='pb-2  font-body text-sm text-gray-500 '>Asegurate que todo esté en orden para que tu pedido llegue en las mejores condiciones.</div>
            </div>
            <div className='bg-hekto-sky-blue p-4 rounded-md border border-gray-300 shadow-sm mb-16'>
              <div className='font-semibold font-body text-gray-500 pb-4'>Todos los items en este listado serán programados para la entrega en la fecha establecida, debido a tipo de producto y proveedor.</div>
              {/* Products on the Cart */}
              {cart.map(item => {
                return (
                  <div className='flex justify-between p-4'>
                    <div className='flex space-x-2 items-start'>
                      <img className='w-32' src={item.img} alt="" />
                      <div className='flex flex-col items-start space-y-1'>
                        <div className='font-bold text-opacity-80 text-black'>{item.name}</div>
                        <div>{item.quantity > 0 ? <div className='text-sm text-white font-bold rounded-2xl px-2 py-1 bg-green-600'>En stock</div> : null}</div>
                        <div>Cantidad: {item.quantity}</div>
                      </div>
                    </div>
                    <div className='font-bold text-black'>${item.price}</div>
                  </div>
                )
              })}
            </div>
          </div>
          {/* Right Container */}
          <div className='rounded-md bg-hekto-sky-blue w-4/12 p-4'>
            <div> Confirmar CheckOut</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout;