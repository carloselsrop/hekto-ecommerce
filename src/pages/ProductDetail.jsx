import Brands from '../components/common/Brands'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import TitlePage from '../components/common/TitlePage'

const ProductDetail = () => {
  return (
    <div>
      <Navbar />
      <TitlePage title="Product Detail" />
      <div className="w-full flex justify-center font-body select-none">
        <div className="w-10/12 sm:w-8/12 flex flex-col py-16">
          {/* Product Box */}
          <div className="w-full h-96 shadow-xl mb-16 rounded-md p-4 flex space-x-2 bg-gray-50 border border-opacity-5 border-gray-500">
            {/* Mini-Images */}
            <div className="w-1/12 space-y-4 flex flex-col">
              <img className="h-1/3 rounded-md border-2 cursor-pointer border-transparent hover:border-hekto-pantone-purple transition duration-300" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="" />
              <img className="h-1/3 rounded-md border-2 cursor-pointer border-transparent hover:border-hekto-pantone-purple transition duration-300" src="https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="" />
              <img className="h-1/3 rounded-md border-2 cursor-pointer border-transparent hover:border-hekto-pantone-purple transition duration-300" src="https://images.unsplash.com/photo-1627163159947-cfa0a930e0b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80" alt="" />
            </div>
            {/* Big Image */}
            <div className="w-4/12">
              <img className="w-full h-full rounded-md" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="" />
            </div>
            {/* Information */}
            <div className="w-7/12">
              <div className="w-full h-full px-8 py-16 space-y-4">
                <div className="text-3xl font-bold text-hekto-navy-blue">Playwood Arm-Chair</div>
                <div className="flex space-x-4 text-sm">
                  <div className="text-hekto-navy-blue">$32.00</div>
                  <div className="text-hekto-pink line-through font-normal">$35.00</div>
                </div>
                <div className="text-sm text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. culpa recusandae voluptatem vitae quis mollitia a? Eaque?
                </div>
                <div className="flex space-x-4">
                  <button className="uppercase text-xs py-3 rounded text-white bg-hekto-pink px-4 hover:bg-pink-600 transition duration-300">Add To Cart</button>
                  <button className="hover:text-red-600 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="text-hekto-navy-blue font-semibold">Share</div>
                  <div className="flex space-x-2">
                    <button>
                      <img className="rounded-full w-4" src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />
                    </button>
                    <button>
                      <img className="rounded-full w-4" src=" https://1000marcas.net/wp-content/uploads/2019/11/Instagram-logo.png" alt="" />
                    </button>
                    <button>
                      <img className="rounded-full w-4" src="https://hipertextual.com/wp-content/uploads/2012/06/twitter-bird-white-on-blue.jpg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Details Product */}
      <div className="w-full flex justify-center font-body select-none bg-hekto-sky-blue">
        <div className="w-10/12 sm:w-8/12 flex flex-col py-16">
          {/* Title */}
          <div className="pb-8">
            <button className="text-lg font-bold text-hekto-navy-blue border-b border-hekto-navy-blue"> Description</button>
          </div>
          {/* Various Caracteristicas */}
          <div className="pb-10">
            <div className="pb-2 font-bold text-hekto-navy-blue">Various Temp.</div>
            <div className="text-sm text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis aperiam sed aliquam tempore eius? Suscipit ab ratione natus reiciendis tenetur repudiandae quod iste aspernatur nisi molestiae consequuntur sunt autem repellendus deserunt veniam nihil neque, quae eum, facere quidem. Quaerat libero voluptates sed, quisquam ullam autem?</div>
          </div>
          {/* Details */}
          <div>
            <div className="pb-2 font-bold text-hekto-navy-blue">More Details</div>
            <div className="text-sm space-y-3 flex flex-col">
              <div className="flex space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, numquam? Maxime assumenda accusamus dolorem dolore.</div>
              </div>
              <div className="flex space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, numquam? Maxime assumenda accusamus dolorem dolore.</div>
              </div>
              <div className="flex space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, numquam? Maxime assumenda accusamus dolorem dolore.</div>
              </div>
              <div className="flex space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, numquam? Maxime assumenda accusamus dolorem dolore.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Brands />
      <Footer />
    </div>
  )
}

export default ProductDetail