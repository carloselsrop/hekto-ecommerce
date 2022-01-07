// Imports
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/cartContext';
import { AuthContext } from '../../context/authContext';
import emptyCart from '../../static/gif/emptyCart.gif'

const Navbar = () => {
  // Context
  const { cart, setCart, handleDelete } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const { logOut } = useContext(AuthContext);

  // State
  const history = useHistory();
  const location = useLocation();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const [isConfirmOrder, setIsConfirmOrder] = useState(false);

  // UseEffect
  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      setCart(JSON.parse(cart));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Data
  const navButtons = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Faq', path: '/faq' },
  ];

  // Methods
  const openMenu = () => {
    setIsMenuActive(true);
  };
  const closeMenu = () => {
    setIsMenuActive(false);
  };
  const toggleCartHandler = () => {
    setToggleCart(!toggleCart);
  };
  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
  const routerCart = () => {
    if (cart.length > 0) {
      history.push("/cart");
    }
  };
  const confirmOrderTrue = () => {
    setIsConfirmOrder(true);
  };
  const confirmOrderFalse = () => {
    setIsConfirmOrder(false);
  };

  // Render
  return (
    <div className="w-full flex justify-center font-body">
      {/* Entire Navbar */}
      <div className="w-10/12 sm:w-8/12 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="w-2/12 flex justify-start">
          <Link to="/" className='text-2xl text-hekto-navy-blue font-body font-black select-none'>Hekto</Link>
        </div>
        {/* Nav Buttons */}
        <div className="w-7/12 hidden lg:flex space-x-8 font-body ">
          {navButtons.map(btn => {
            return (
              <Link
                key={btn.name}
                to={btn.path}
                className={`${location.pathname === btn.path ? 'text-hekto-pink' : 'text-hekto-gray-light'
                  } text-sm hover:text-hekto-pink transition duration-300`}
              >
                {btn.name}
              </Link>
            )
          })}
        </div>
        {/* Searchbar, Account and Cart*/}
        <div className="w-3/12 lg:flex hidden justify-between items-center space-x-1">
          <div className="flex w-11/12 items-center h-8">
            <input className="w-10/12 focus:outline-none text-sm border rounded-sm h-full px-2" type="text" />
            <button className=" bg-hekto-pink h-full px-2 rounded-r-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          {
            user
              ? <button onClick={logOut}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-hekto-pink transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              : null
          }

          {location.pathname !== '/cart' && location.pathname !== '/checkout' ? <button className='relative' onClick={toggleCartHandler}>
            <div className='absolute top-0 right-0  w-4 h-4 flex justify-center items-center bg-hekto-pink rounded-full'>
              <span className='text-white text-xs font-extrabold'>{cart.length}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-hekto-pink transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button> : null}
        </div>
        {/* Mobile Nav */}
        <div className="lg:hidden">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={openMenu} className="h-6 w-6 text-hekto-off-navy-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Nav Menu */}
        <div className={`w-full z-50 h-screen fixed lg:hidden transition transform top-0 left-0 bg-hekto-sky-blue ${isMenuActive ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="w-full flex justify-end pr-7 pt-3 pb-6">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={closeMenu} className="h-5 w-5 text-hekto-off-blue" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="flex justify-center mb-8">
            <div className="w-11/12 flex justify-center items-center h-8">
              <input className="w-10/12 border border-gray-500 h-full rounded-l-md px-4 text-sm focus:outline-none" placeholder="Busca un producto..." type="text" />
              <button className="bg-hekto-pink h-full px-2 rounded-r-md"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg></button>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6 pb-8">
            {navButtons.map(btn => {
              return (
                <Link
                  key={btn.name}
                  to={btn.path}
                  className={`${location.pathname === btn.path ? 'text-hekto-pink' : 'text-hekto-gray-light'
                    } text-sm hover:text-hekto-pink transition duration-300`}
                >
                  {btn.name}
                </Link>
              )
            })}
          </div>

        </div>
      </div>
      {/* Cart Screen */}
      <div className={`transform w-full h-screen flex justify-end bg-black bg-opacity-50 fixed z-50 ${toggleCart ? '-translate-x-0' : 'translate-x-full'}`}>
        {/* Confirmation Modal */}
        <div className={`w-full h-screen fixed bg-black bg-opacity-50 z-50 transform flex justify-center items-center ${isConfirmOrder ? 'scale-100' : 'scale-0'}`}>
          <div className={`w-4/12 py-3 px-4 bg-white rounded-md transform transition duration-300 ${isConfirmOrder ? 'scale-100' : 'scale-0'}`}>
            {/* Title */}
            <div className='flex items-center space-x-2 border-b-2 pb-4'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div className='text-xl'>
                Esta seguro que quiere continuar al carrito?
              </div>
            </div>
            {/* Info */}
            <div className='py-4 text-xs text-gray-500'>
              Al continuar sera redirigido a la pagina de confirmar compra y si desea seguir comprando puede volver a la pagina principal.
            </div>
            {/* Confirm and Cancel */}
            <div className='flex space-x-4 justify-end items-center'>
              <button className='border border-gray-400 px-3 rounded-lg text-sm hover:border-white hover:bg-red-500 transition duration-300 hover:text-white focus:outline-none py-1.5' onClick={confirmOrderFalse}>Cancelar</button>
              <button className='border border-gray-400 px-3 rounded-lg text-sm hover:border-white hover:bg-green-500 transition duration-300 hover:text-white focus:outline-none py-1.5' onClick={routerCart}>Continuar</button>
            </div>
          </div>
        </div>
        <div className={`w-4/12 h-screen relative flex flex-col justify-between bg-white p-4 transform transition duration-500 ${toggleCart ? '-translate-x-0' : 'translate-x-full'}`}>
          <div>
            {/* Close Button */}
            <button className='mb-12 p-1' onClick={toggleCartHandler}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {/* Products List */}
            <div>
              {!cart.length
                ?
                <div className='flex flex-col select-none justify-center items-center w-full'>
                  <img src={emptyCart} alt="" />
                  <div className='text-gray-800'>
                    Tu carrito está vacío
                  </div>
                </div>
                :
                <div className='space-y-4'>
                  {cart.map(cart => {
                    return (
                      <div key={cart.id} className='flex border-b-2 pb-4 w-full items-center justify-between'>
                        <img className='w-2/12 select-none' src={cart.img} alt="" />
                        <div className='w-3/12 space-y-1.5'>
                          <div>
                            <div className='text-sm font-semibold'>Producto:</div>
                            <div className='text-xs'>{cart.name}</div>
                          </div>
                          <div>
                            <div className='text-sm font-semibold'>Codigo:</div>
                            <div className='text-xs'>{cart.code}</div>
                          </div>
                        </div>
                        <div className='w-3/12 space-y-1.5'>
                          <div>
                            <div className='text-sm font-semibold'>Precio:</div>
                            <div className='text-xs'>${cart.price}</div>
                          </div>
                          <div>
                            <div className='text-sm font-semibold'>Cantidad:</div>
                            <div className='text-xs'>{cart.quantity}</div>
                          </div>
                        </div>
                        <div className='w-3/12 flex justify-end items-center'>
                          <button onClick={() => { handleDelete(cart.id) }} className='bg-gray-300 rounded-lg p-2 flex items-center space-x-2 select-none'>
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className='font-semibold text-gray-800'>Eliminar</span>
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              }
            </div>
          </div>
          {/* Total Price and Checkout Button */}
          <div className='fixed bottom-4 left-0 px-4 w-full flex flex-col justify-center'>
            <div className='pb-2 flex justify-end'>
              Total: ${totalPrice}
            </div>
            <button onClick={confirmOrderTrue} disabled={cart.length < 1} className={`text-center w-full py-2 rounded-md text-white font-semibold transition duration-300 ${cart.length ? ' bg-hekto-navy-blue text-opacity-100' : ' bg-hekto-off-navy-blue  text-opacity-20 cursor-not-allowed'}`}>
              Completar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar