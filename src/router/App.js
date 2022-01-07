import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from '../pages/Login'
import Home from '../pages/Home'
import CompletedOrder from '../pages/CompletedOrder';
import NotFound404 from '../pages/NotFound404';
import ContactUs from '../pages/ContactUs';
import Faq from '../pages/Faq';
import AboutUs from '../pages/AboutUs';
import Register from '../pages/Register';
import MyAccount from '../pages/MyAccount';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import { useContext } from 'react'
import { CartContextProvider } from '../context/cartContext';
import { AuthContext, AuthContextProvider } from '../context/authContext';

const CheckAuth = ({ children, isPrivate = true, }) => {
  const { isLogged } = useContext(AuthContext);
  if ((isLogged && isPrivate) || (!isLogged && !isPrivate)) {
    return children;
  }
  if (!isLogged && isPrivate) {
    return <Redirect to="/login" />
  }
  if (isLogged && !isPrivate) {
    return <Redirect to="/" />
  }
}

const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <CartContextProvider>
          <Switch>
            <Route path="/login">
              <CheckAuth isPrivate={false}>
                <Login />
              </CheckAuth>
            </Route>
            <Route path="/register">
              <CheckAuth isPrivate={false}>
                <Register />
              </CheckAuth>
            </Route>
            <Route path="/myAccount">
              <CheckAuth isPrivate={true}>
                <MyAccount />
              </CheckAuth>
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
            <Route path="/completedOrder">
              <CompletedOrder />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/productDetail">
              <ProductDetail />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <NotFound404 />
            </Route>
          </Switch>
        </CartContextProvider>
      </AuthContextProvider>
    </Router>
  )
}

export default App;
