const TrendingProducts = () => {

  const trendingProducts = [
    { id: 1, name: 'Xbox Series X', img: 'https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/xbsx_top.png', code: 'ASD475', price: 499.50 },
    { id: 2, name: 'Mando Dualsense PS5', img: 'https://www.pngall.com/wp-content/uploads/5/PS5-Controller-PNG-Image.png', code: 'ASD475', price: 80.00 },
    { id: 3, name: `Macbook pro 13'`, img: 'https://pngimg.com/uploads/macbook/macbook_PNG65.png', code: 'ASD475', price: 1650 },
    { id: 4, name: 'Iphone 13', img: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/main_card_image/https/bdt.computerhoy.com/sites/default/files/iphone-13-pro-max-blue-select.png?itok=0Ct_Tzqa', code: 'ASD475', price: 999 },
  ];

  return (
    <div className="flex flex-col mb-16">
      <div className="text-center text-3xl text-hekto-navy-blue font-bold pb-6">
        Trending Products
      </div>
      <div className="mb-4 font-body">
        <div className=" w-full grid grid-flow-row transition duration-300 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 grid-cols-1">
          {/* Product Item */}
          {trendingProducts.map(product => {
            return (
              <div key={product.id} className="flex flex-col group items-center justify-center shadow-lg rounded-md">
                <div className="bg-white pt-6 w-full flex flex-col items-center rounded-t-md group-hover:bg-blue-50 transition duration-300  text-transparent">
                  <img className="w-11/12 h-52 rounded-md bg-gray-100" src={product.img} alt="" />
                </div>
                <div className="w-full py-6 group-hover:bg-blue-50 space-y-2 rounded-b-md transition duration-300 flex flex-col items-center">
                  <div className=" text-lg font-extrabold text-hekto-off-navy-blue">{product.name}</div>
                  <div className="flex space-x-4 items-center">
                    <div className=" text-sm text-hekto-pink">
                      ${product.price.toFixed(2)}
                    </div>
                    <div className=" text-xs text-hekto-off-navy-blue line-through">
                      ${product.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;