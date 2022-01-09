import Navbar from '../components/common/Navbar'
import TitlePage from '../components/common/TitlePage'
import Brands from '../components/common/Brands'
import Footer from '../components/common/Footer'
import chairImg from '../static/img/chair1Img.png'
import productRow from '../static/img/productRow.png'
import { useState } from 'react'

const Products = () => {
  const [productView, setProductView] = useState(false)

  const gridProducts = () => {
    setProductView(false)
  }
  const rowProducts = () => {
    setProductView(true)
  }

  return (
    <div>
      <Navbar />
      <TitlePage title="Products" />
      <div className="w-full flex justify-center ">
        <div className="w-10/12 sm:w-8/12 flex flex-col py-16">
          {/* Title And Filter Products */}
          <div className="w-full flex justify-between font-body items-end text-hekto-navy-blue mb-16">
            <div>
              <div className="text-xl text-hekto-navy-blue font-bold">Ecommerce Accesories & Fashion Item</div>
              <div className="text-xs text-hekto-off-navy-blue text-opacity-50">About 9620 results (0.62 seconds)</div>
            </div>
            <div className="flex space-x-8 text-sm">
              {/* <div className="flex items-center">
                <div className="pr-1">Sort By: </div>
                <select className="w-24 py-2 text-xs border rounded-sm focus:outline-none px-1" name="" id="">
                  <option value="">Relevance</option>
                  <option value="">Price: Low to High</option>
                  <option value="">Price: High to Low</option>
                  <option value="">Newest</option>
                  <option value="">Best Seller</option>
                </select>
              </div> */}
              <div className="flex items-center">
                <div className="pr-2">View:</div>
                <div className="flex items-center space-x-2">
                  <button onClick={gridProducts}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button onClick={rowProducts}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Products View */}
          {productView
            // Row View
            ?
            <div className="mb-4 font-body space-y-4">
              {/* Product Row */}
              <div className="bg-white flex-col lg:flex-row space-y-4 group hover:bg-gray-100 px-2 py-2 flex items-center transition duration-300 rounded-md">
                {/* Img Product */}
                <div className="mr-4 select-none">
                  <img src={productRow} alt="" />
                </div>
                {/* Info Product */}
                <div className="lg:w-7/12 w-full px-3 lg:px-4 select-none relative text-transparent group flex flex-col">
                  <div>
                    <div className="text-sm font-bold text-hekto-blue">Accusamm Tincident</div>
                    <div className="text-xs flex space-x-4">
                      <div className="text-hekto-off-navy-blue font-bold">$26.00</div>
                      <div className=" line-through text-hekto-pink ">$52.00</div>
                    </div>
                    <div className="text-xs text-gray-400 pb-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. At vero commodi, voluptatum dignissimos vel, ut autem id ex aliquam eos tempore debitis deleniti veniam blanditiis perferendis temporibus, nihil asperiores exercitationem!</div>
                  </div>
                  <div className="flex justify-start space-x-3 ">
                    <button className="bg-transparent hover:bg-white flex justify-center items-center rounded-full py-1 px-1 hover:-translate-y-1 transform group-hover:text-black transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                    <button className="bg-transparent hover:bg-white flex justify-center items-center rounded-full py-1 px-1 hover:-translate-y-1 group-hover:text-black transform transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* Product Row */}
              <div className="bg-white flex-col lg:flex-row space-y-4 group hover:bg-gray-100 px-2 py-2 flex items-center transition duration-300 rounded-md">
                {/* Img Product */}
                <div className="mr-4 select-none">
                  <img src={productRow} alt="" />
                </div>
                {/* Info Product */}
                <div className="lg:w-7/12 w-full px-3 lg:px-4 select-none relative text-transparent group flex flex-col">
                  <div>
                    <div className="text-sm font-bold text-hekto-blue">Accusamm Tincident</div>
                    <div className="text-xs flex space-x-4">
                      <div className="text-hekto-off-navy-blue font-bold">$26.00</div>
                      <div className=" line-through text-hekto-pink ">$52.00</div>
                    </div>
                    <div className="text-xs text-gray-400 pb-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. At vero commodi, voluptatum dignissimos vel, ut autem id ex aliquam eos tempore debitis deleniti veniam blanditiis perferendis temporibus, nihil asperiores exercitationem!</div>
                  </div>
                  <div className="flex justify-start space-x-3 ">
                    <button className="bg-transparent hover:bg-white flex justify-center items-center rounded-full py-1 px-1 hover:-translate-y-1 transform group-hover:text-black transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                    <button className="bg-transparent hover:bg-white flex justify-center items-center rounded-full py-1 px-1 hover:-translate-y-1 group-hover:text-black transform transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            // Grid View
            :
            <div className="mb-4 font-body">
              <div className=" w-full grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 grid-cols-1">
                {/* Product Item */}
                <div className="flex flex-col h-64 items-center justify-center shadow rounded-md">
                  <div className="bg-hekto-sky-blue w-full h-3/4 flex justify-center hover:bg-green-100 transition duration-300 rounded-t-md relative text-transparent group">
                    <img src={chairImg} alt="" />
                    <div className="absolute bottom-4 left-2 flex flex-col space-y-3">
                      <button className="bg-transparent hover:bg-white flex justify-center items-center rounded-full py-1 px-1 hover:-translate-y-1 transform group-hover:text-black transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </button>
                      <button className="bg-transparent hover:bg-white flex justify-center items-center rounded-full py-1 px-1 hover:-translate-y-1 group-hover:text-black transform transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-1/4 bg-white  flex flex-col items-center rounded-md">
                    <div className=" text-hekto-navy-blue font-bold pt-2">Silla Buenarda</div>
                    <div className="flex space-x-4 text-sm">
                      <div>
                        $12.00
                      </div>
                      <div className="text-hekto-pink line-through">
                        $15.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-64 items-center justify-center shadow rounded-md">
                  <div className="bg-hekto-sky-blue w-full h-3/4 flex justify-center hover:bg-green-100 transition duration-300 rounded-t-md relative text-transparent group">
                    <img src={chairImg} alt="" />
                    <div className="absolute bottom-4 left-2 flex flex-col space-y-3">
                      <button className="bg-transparent hover:bg-white flex justify-center items-center rounded-full py-1 px-1 hover:-translate-y-1 transform group-hover:text-black transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </button>
                      <button className="bg-transparent hover:bg-white flex justify-center items-center rounded-full py-1 px-1 hover:-translate-y-1 group-hover:text-black transform transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-1/4 bg-white  flex flex-col items-center rounded-md">
                    <div className=" text-hekto-navy-blue font-bold pt-2">Silla Buenarda</div>
                    <div className="flex space-x-4 text-sm">
                      <div>
                        $12.00
                      </div>
                      <div className="text-hekto-pink line-through">
                        $15.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-64 items-center justify-center shadow rounded-md">
                  <div className="bg-hekto-sky-blue w-full h-3/4 flex justify-center hover:bg-green-100 transition duration-300 rounded-t-md relative text-transparent group">
                    <img src={chairImg} alt="" />
                    <div className="absolute bottom-4 left-2 flex flex-col space-y-3">
                      <button className="bg-transparent hover:bg-white flex justify-center items-center rounded-full py-1 px-1 hover:-translate-y-1 transform group-hover:text-black transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </button>
                      <button className="bg-transparent hover:bg-white flex justify-center items-center rounded-full py-1 px-1 hover:-translate-y-1 group-hover:text-black transform transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-1/4 bg-white  flex flex-col items-center rounded-md">
                    <div className=" text-hekto-navy-blue font-bold pt-2">Silla Buenarda</div>
                    <div className="flex space-x-4 text-sm">
                      <div>
                        $12.00
                      </div>
                      <div className="text-hekto-pink line-through">
                        $15.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-64 items-center justify-center shadow rounded-md">
                  <div className="bg-hekto-sky-blue w-full h-3/4 flex justify-center hover:bg-green-100 transition duration-300 rounded-t-md relative text-transparent group">
                    <img src={chairImg} alt="" />
                    <div className="absolute bottom-4 left-2 flex flex-col space-y-3">
                      <button className="bg-transparent hover:bg-white flex justify-center items-center rounded-full py-1 px-1 hover:-translate-y-1 transform group-hover:text-black transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </button>
                      <button className="bg-transparent hover:bg-white flex justify-center items-center rounded-full py-1 px-1 hover:-translate-y-1 group-hover:text-black transform transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-1/4 bg-white  flex flex-col items-center rounded-md">
                    <div className=" text-hekto-navy-blue font-bold pt-2">Silla Buenarda</div>
                    <div className="flex space-x-4 text-sm">
                      <div>
                        $12.00
                      </div>
                      <div className="text-hekto-pink line-through">
                        $15.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <Brands />
      <Footer />
    </div>
  );
};

export default Products;