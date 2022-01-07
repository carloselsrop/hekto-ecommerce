// Imports
import Navbar from '../components/common/Navbar'
import emptyCart from '../static/gif/emptyCart.gif'
import TitlePage from '../components/common/TitlePage'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext';

const Cart = () => {
  // Context and State
  const { cart, handleDelete, addToCart, minusQuantity } = useContext(CartContext);
  const [counter, setCounter] = useState(0)

  // Methods
  const handleCounter = ({ target: { value } }) => {
    setCounter(value)
  }

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  // Template
  return (
    <div>
      <Navbar />
      <TitlePage title="Shopping Cart" />
      <div className="w-full flex justify-center py-16 select-none font-body">
        <div className="w-10/12 sm:w-8/12 flex flex-col items-start sm:flex-row">
          {/* Left Div */}
          {cart.length > 0 ? <div className="w-8/12">
            <div className="flex font-bold w-10/12 text-sm text-hekto-navy-blue mb-4">
              <div className="w-6/12">
                Product
              </div>
              <div className="w-2/12">Price</div>
              <div className="w-2/12">Quantity</div>
              <div className="w-2/12">Sub-Total</div>
            </div>
            {/* Cart Products */}
            {cart.map(item => (
              <div className="flex items-center py-4 w-10/12">
                <div className="w-6/12 flex space-x-2 items-center">
                  <div className="relative">
                    <img className='w-24 rounded border-2' src={item.img} alt="" />
                    <button onClick={() => { handleDelete(item.id) }} className="absolute -top-1 -right-1 bg-black rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div className="text-sm space-y-1">
                    <div>{item.name}</div>
                    <div>{item.code}</div>
                  </div>
                </div>
                <div className="w-2/12 text-sm">
                  ${item.price}
                </div>
                <div className="w-2/12 text-sm flex justify-start">
                  <div className="w-6/12 bg-red-500 flex">
                    <button onClick={() => { minusQuantity(item) }} className="px-1 text-lg bg-hekto-sky-blue">
                      -
                    </button>
                    <input onChange={handleCounter} value={item.quantity} className="w-full text-center border" />
                    <button onClick={() => { addToCart(item) }} className="px-1 text-lg bg-hekto-sky-blue">
                      +
                    </button>
                  </div>
                </div>
                <div className="w-2/12 text-sm">${item.price * item.quantity}</div>
              </div>
            ))}
          </div>
            :
            <div className='w-8/12 flex flex-col-reverse space-y-4 items-center justify-center'>
              <div className='text-xl text-hekto-navy-blue font-extrabold'>
                Shopping cart is empty
              </div>
              <div>
                <img src={emptyCart} alt="" />
              </div>
            </div>
          }
          {/* Right Div */}
          <div className="bg-gray-200 rounded-lg w-4/12 p-4">
            <div className='pb-4 flex'>
              <Link to="/checkout" disabled={cart.length < 1} className={` w-full text-center text-gray-100 bg-hekto-off-navy-blue py-2 rounded-md ${cart.length ? ' bg-hekto-navy-blue text-opacity-100' : ' bg-hekto-off-navy-blue  text-opacity-20 cursor-not-allowed'}`}>
                Confirmar Pedido
              </Link>
            </div>
            <div>
              <div className='text-md text-hekto-navy-blue font-bold pb-4 border-b-2 border-gray-300'>Resumen de la orden</div>
              <div className='space-y-4 pt-4' >
                <div>Items en el carrito: ({cart.length})</div>
                <div className='w-full flex justify-between'>
                  <div>Total a pagar: </div>
                  <div>${totalPrice}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;