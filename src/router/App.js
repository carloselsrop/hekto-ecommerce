import {
  BrowserRouter as Router,
  Switch,
  Route
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

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/myAccount">
          <MyAccount />
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
        <Route path="/404">
          <NotFound404 />
        </Route>
        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  )
}


export default App;
