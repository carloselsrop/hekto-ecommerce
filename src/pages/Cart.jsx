// Imports
import Navbar from '../components/common/Navbar'
import TitlePage from '../components/common/TitlePage'
import cartProduct from '../static/img/cartProduct.png'
import { useState } from 'react'


const Cart = () => {
  // Data
  const [counter, setCounter] = useState(0)

  // Methods
  const handleCounter = ({ target: { value } }) => {
    setCounter(value)
  }
  const handlePlus = () => {
    setCounter(counter + 1)
  }
  const handleMinus = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  // Template
  return (
    <div>
      <Navbar />
      <TitlePage title="Shopping Cart" />
      <div className="w-full flex justify-center py-16 select-none font-body">
        <div className="w-10/12 sm:w-8/12 flex flex-col sm:flex-row">
          {/* Left Div */}
          <div className="w-8/12">
            <div className="flex font-bold w-10/12 text-sm text-hekto-navy-blue mb-4">
              <div className="w-6/12">
                Product
              </div>
              <div className="w-2/12">Price</div>
              <div className="w-2/12">Quantity</div>
              <div className="w-2/12">Total</div>
            </div>
            {/* Cart Products */}
            <div className="flex items-center py-4 w-10/12">
              <div className="w-6/12 flex space-x-2 items-center">
                <div className="relative">
                  <img src={cartProduct} alt="" />
                  <button className="absolute -top-1 -right-1 bg-black rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="text-sm space-y-1">
                  <div>Ut diam consequat</div>
                  <div>Color Brown</div>
                  <div>Size: XL</div>
                </div>
              </div>
              <div className="w-2/12 text-sm">
                $32.00
              </div>
              <div className="w-2/12 text-sm flex justify-start">
                <div className="w-6/12 bg-red-500 flex">
                  <button onClick={handleMinus} className="px-1 text-lg bg-hekto-sky-blue">
                    -
                  </button>
                  <input onChange={handleCounter} value={counter} className="w-full text-center border" />
                  <button onClick={handlePlus} className="px-1 text-lg bg-hekto-sky-blue">
                    +
                  </button>
                </div>
              </div>
              <div className="w-2/12 text-sm">$32.00</div>
            </div>
          </div>
          {/* Right Div */}
          <div className="bg-green-600 w-4/12 flex flex-col items-center">
            <div>
              <div>Cart Totals</div>
              <div>asd</div>
            </div>
            <div>
              <div>Calculate Shopping</div>
              <div>
                asd
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;