import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  // State
  const location = useLocation();
  const [isMenuActive, setIsMenuActive] = useState(false);

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

  // Render
  return (
    <div className="w-full flex justify-center font-body">
      <div className="w-10/12 sm:w-8/12 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="w-2/12 text-2xl text-hekto-navy-blue font-body font-black">
          Hekto
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
        {/* Search and Account */}
        <div className="w-3/12 lg:flex hidden justify-between items-center">
          <div className="flex w-11/12 items-center h-8">
            <input className="w-10/12 focus:outline-none text-sm border rounded-sm h-full px-2" type="text" />
            <button className=" bg-hekto-pink h-full px-2 rounded-r-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-hekto-pink transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
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
    </div>
  )
}

export default Navbar