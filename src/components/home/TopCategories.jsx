const TopCategories = () => {

  const topCategories = [
    { id: 1, name: 'Adidas', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png' },
    { id: 2, name: 'Mando Dualsense PS5', img: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4f3.png' },
    { id: 3, name: `Macbook pro 13'`, img: 'https://logodownload.org/wp-content/uploads/2014/04/intel-logo-8.png' },
    { id: 4, name: 'Iphone 13', img: 'data:image/png;base64,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' },
  ];

  return (
    <div className="w-full flex justify-center font-body select-none">
      <div className="w-10/12 sm:w-8/12 flex flex-col py-4">
        <div className="flex flex-col mb-16 relative z-40">
          <div className="text-center text-3xl text-hekto-navy-blue font-bold pb-10">
            Top Categories
          </div>
          <div className='flex w-full justify-center'>
            <div className=" w-11/12 grid grid-flow-row transition duration-300 bg-green-500 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 grid-cols-1">
              {/* Product Item */}
              {topCategories.map(product => {
                return (
                  <div key={product.id} className="relative w-56 h-56 ">
                    <div className="bg-white z-50 scale-105 p-8 rounded-full h-full absolute border-2 cursor-pointer border-hekto-purple group hover:translate-x-2 hover:-translate-y-2 transform text-transparent w-full transition duration-300">
                      <div className="flex justify-center items-center h-full w-full">
                        <img className="h-32 pb-4 " src={product.img} alt="" />
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

export default TopCategories;