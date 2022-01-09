import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const FeaturedProducts = () => {
  const { featuredProducts, addToCart } = useContext(CartContext);

  return (
    <div className="w-full flex justify-center font-body select-none">
      <div className="w-10/12 sm:w-8/12 flex flex-col py-4">
        <div className="flex flex-col mb-16 relative z-40">
          <div className="text-center text-3xl text-hekto-navy-blue font-bold pb-6">
            Featured Products
          </div>
          <div className="mb-4 font-body">
            <div className=" w-full grid grid-flow-row transition duration-300 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 grid-cols-1">
              {/* Product Item */}
              {featuredProducts.map(product => {
                return (
                  <div key={product.id} className="flex flex-col group items-center justify-center shadow-lg rounded-md">
                    <div className="bg-gray-50 py-4 w-full flex flex-col items-center rounded-t-md group-hover:bg-blue-50 transition duration-300 relative text-transparent">
                      <img className="h-40 my-6" src={product.img} alt="" />
                      <button className="text-xs group-hover:bg-green-500 transform hover:scale-105 bg-transparent text-transparent transition duration-300 group-hover:text-white px-3 py-2 rounded ">
                        View Details
                      </button>
                      <div className="absolute top-3 left-2 flex space-x-2">
                        <button onClick={() => { addToCart(product) }} className="bg-transparent hover:bg-purple-100 flex justify-center items-center rounded-full p-2 hover:-translate-y-1 transform group-hover:text-hekto-blue transition duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 hover:text-hekto-navy-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </button>
                        <button className="bg-transparent hover:bg-purple-100 flex justify-center items-center rounded-full p-2 hover:-translate-y-1 transform group-hover:text-hekto-blue transition duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="w-full py-3 space-y-2 group-hover:bg-hekto-blue rounded-b-md transition duration-300 flex flex-col items-center group-hover:text-white">
                      <div className="group-hover:text-white text-lg font-extrabold pt-2 text-hekto-pink">{product.name}</div>
                      <div className=" group-hover:text-white text-xs text-hekto-blue font-normal">
                        Code - {product.code}
                      </div>
                      <div className="group-hover:text-white text-md text-hekto-blue">
                        ${product.price.toFixed(2)}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;