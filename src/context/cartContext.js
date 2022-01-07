import { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const history = useHistory();
  const [featuredProducts, setFeaturedProducts] = useState([
    {
      id: 1,
      name: 'Xbox Series X',
      img: 'https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/xbsx_top.png',
      code: 'ASD475',
      price: 499.50,
      quantity: 75
    },
    { id: 2, name: 'Mando Dualsense PS5', img: 'https://www.pngall.com/wp-content/uploads/5/PS5-Controller-PNG-Image.png', code: 'ASD475', price: 80.00, quantity: 75 },
    { id: 3, name: `Macbook pro 13'`, img: 'https://pngimg.com/uploads/macbook/macbook_PNG65.png', code: 'ASD475', price: 1650, quantity: 75 },
    { id: 4, name: 'Iphone 13', img: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/main_card_image/https/bdt.computerhoy.com/sites/default/files/iphone-13-pro-max-blue-select.png?itok=0Ct_Tzqa', code: 'ASD475', price: 999, quantity: 75 },
  ]);
  const [cart, setCart] = useState([]);

  // useEffect
  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  // Methods
  const addToCart = (product) => {
    // if the product is already in the cart, increase the quantity
    const isExistingProduct = cart.find(item => item.id === product.id);
    let resultCart;
    if (isExistingProduct) {
      const newCart = cart.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item;
      });
      resultCart = newCart;
      setCart(newCart);
    } else {
      const newCart = [...cart, { ...product, quantity: 1 }];
      resultCart = newCart;
      setCart(newCart);
    }
    localStorage.setItem('cart', JSON.stringify(resultCart));
  }
  const minusQuantity = (product) => {
    const newCart = cart.map(item => {

      if (item.id === product.id) {
        if (item.quantity === 1) {
          return { ...item, quantity: 1 }
        }
        return { ...item, quantity: item.quantity - 1 }
      }
      return item;
    });
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }
  const handleDelete = (id) => {
    const newCart = cart.filter(product => product.id !== id);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }
  const handleEmptyCart = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
    history.push("/");
  }

  return (
    <CartContext.Provider value={{
      featuredProducts,
      cart,
      setCart,
      addToCart,
      minusQuantity,
      handleDelete,
      handleEmptyCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider };