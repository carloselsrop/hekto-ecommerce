import { useDispatch } from 'react-redux';
import { addToCart, minusQuantity } from '../../store/cart/slice';

const PreviewModal = ({ product, handlePreviewModal, previewModal }) => {
  const dispatch = useDispatch();
  return (
    // Black Screen
    <div className='fixed w-full h-screen bg-black bg-opacity-50 top-0 z-50 flex justify-center items-center'>
      {/* Modal */}
      <div className={`transition duration-300 w-11/12 sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-6/12 bg-white rounded-md transform text-black pb-6 pt-2 px-4 ${previewModal ? 'scale-100' : 'scale-0'}`}>
        {/* Close Button */}
        <div className='flex justify-end'>
          <button onClick={handlePreviewModal} className='w-8 h-8 rounded-full hover:bg-red-50 flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-red-500 transition duration-300 " viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {/* Info */}
        <div className='flex xl:space-x-8 items-center flex-col xl:flex-row space-y-4'>
          <div className='w-10/12 md:w-10/12 xl:w-4/12'>
            <img className='w-96 h-64 border rounded' src={product.img} alt="" />
          </div>
          <div className='w-full xl:w-8/12 flex flex-col xl:items-start items-center space-y-2'>
            <div className='font-semibold pb-2 xl:pb-4 text-2xl uppercase'>Informacion del producto</div>
            <div><span className='font-bold'>Producto:</span> <span className='text-sm'>{product.name}</span></div>
            <div><span className='font-bold'>Precio:</span> <span className='text-sm'>${product.price}</span></div>
            <div><span className='font-bold'>Codigo:</span> <span className='text-sm'>{product.code}</span></div>
            <div className='text-white'>
              {
                product.quantity > 5
                  ? <div className='bg-green-500 px-2 rounded-2xl py-1 text-sm'>En Stock</div>
                  : <div className='bg-red-500 px-2 rounded-2xl py-1 text-sm'>Agotado</div>
              }
            </div>
            <div className='flex space-x-4'>
              {/* <div className='flex items-center '>
                <button disabled={product.quantity === 1} onClick={() => { dispatch(minusQuantity({ product: product })) }} className={`px-1 text-lg bg-hekto-sky-blue text-black ${product.quantity === 1 ? 'bg-opacity-80 cursor-not-allowed text-opacity-10' : ''}`}>
                  -
                </button>
                <input value={product.quantity} readOnly className=" focus:outline-none text-center border" />
                <button disabled={product.quantity === 5} onClick={() => { dispatch(addToCart({ product: product })) }} className={`px-1 text-lg bg-hekto-sky-blue text-black ${product.quantity === 5 ? 'bg-opacity-80 cursor-not-allowed text-opacity-10' : ''}`}>
                  +
                </button>
              </div> */}
              <button onClick={() => { dispatch(addToCart({ product })); handlePreviewModal(false) }} className="px-4 py-2 rounded text-white text-sm bg-hekto-pink hover:scale-105 transform transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default PreviewModal;