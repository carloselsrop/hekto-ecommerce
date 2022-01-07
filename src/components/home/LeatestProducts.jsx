const LeatestProducts = () => {
  const leatestProducts = [
    { id: 1, name: 'Xbox Series X', img: 'https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/xbsx_top.png', code: 'ASD475', price: 499.50 },
    { id: 2, name: 'Mando Dualsense PS5', img: 'https://www.pngall.com/wp-content/uploads/5/PS5-Controller-PNG-Image.png', code: 'ASD475', price: 80.00 },
    { id: 3, name: `Macbook pro 13'`, img: 'https://pngimg.com/uploads/macbook/macbook_PNG65.png', code: 'ASD475', price: 1650 },
    { id: 4, name: 'Iphone 13', img: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/main_card_image/https/bdt.computerhoy.com/sites/default/files/iphone-13-pro-max-blue-select.png?itok=0Ct_Tzqa', code: 'ASD475', price: 999 }
  ];

  return (
    <div className="flex flex-col mb-16">
      <div className="text-center text-3xl text-hekto-navy-blue font-bold pb-4">
        Leatest Products
      </div>
      <div className="w-full flex justify-center space-x-6 text-sm mb-6">
        <button className="text-hekto-off-navy-blue border-b border-transparent focus:border-hekto-pink transition duration-300 focus:text-hekto-pink">New Arrival</button>
        <button className="text-hekto-off-navy-blue border-b border-transparent focus:border-hekto-pink transition duration-300 focus:text-hekto-pink">Best Seller</button>
        <button className="text-hekto-off-navy-blue border-b border-transparent focus:border-hekto-pink transition duration-300 focus:text-hekto-pink">Featured</button>
        <button className="text-hekto-off-navy-blue border-b border-transparent focus:border-hekto-pink transition duration-300 focus:text-hekto-pink">Special Offer</button>
      </div>
      <div className="mb-4 font-body">
        <div className=" w-full grid grid-flow-row transition duration-300 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 grid-cols-1">
          {/* Product Item */}
          {leatestProducts.map((product) => {
            return (
              <div key={product.id} className="flex flex-col group items-center justify-center shadow-lg rounded-md">
                <div className="bg-gray-50 py-4 w-full flex flex-col items-center rounded-t-md group-hover:bg-blue-50 transition duration-300 relative text-transparent">
                  <img className="h-40 my-6" src={product.img} alt="" />
                  <button className="text-xs group-hover:bg-green-500 transform hover:scale-105 bg-transparent text-transparent transition duration-300 group-hover:text-white px-3 py-2 rounded ">
                    View Details
                  </button>
                  <div className="absolute top-3 left-2 flex space-x-2">
                    <button className="bg-transparent hover:bg-purple-100 flex justify-center items-center rounded-full p-2 hover:-translate-y-1 transform group-hover:text-hekto-blue transition duration-300">
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
  );
};

export default LeatestProducts;