import TrendProduct from '../../static/img/trendImg.png'

const BigTrendingProduct = () => {
  return (
    <div className="bg-purple-100 w-full flex justify-center mb-16">
      <div className=" w-10/12 sm:w-8/12 flex justify-center items-center font-body flex-col-reverse py-14 md:flex-row">
        <div className="md:w-6/12 w-full">
          <img src={TrendProduct} alt="" />
        </div>
        <div className="md:w-6/12 space-y-8 w-full">
          <div className=" text-hekto-navy-blue text-4xl font-bold">Unique Features Of leatest &
            Trending Poducts</div>
          <div className="flex flex-col items-start space-y-2">
            <div className="text-sm text-gray-400 flex space-x-2 items-center">
              <div className="w-2 h-2 rounded-full bg-hekto-pink"></div>
              <div>All frames constructed with hardwood solids and laminates</div>
            </div>
            <div className="text-sm text-gray-400 flex space-x-2 items-center">
              <div className="w-2 h-2 rounded-full bg-hekto-blue"></div>
              <div>Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails</div>
            </div>
            <div className="text-sm text-gray-400 flex space-x-2 items-center">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <div>Arms, backs and seats are structurally reinforced</div>
            </div>
          </div>
          <div className="flex space-x-4 items-center justify-center">
            <button className="px-4 py-2 rounded text-white text-sm bg-hekto-pink hover:scale-105 transform transition duration-300">
              Add to Cart
            </button>
            <div className="flex flex-col items-center space-y-1 text-xs text-hekto-off-navy-blue">
              <div>R&D Sofa</div>
              <div>$89.99</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BigTrendingProduct;