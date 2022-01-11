import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/tailwind.css'
import App from './router/App'
import store from './store'
import { Provider } from 'react-redux'


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode >
  </Provider >,
  document.getElementById('root')
);
