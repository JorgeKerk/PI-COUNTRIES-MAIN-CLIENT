import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store/'
import axios from 'axios'


// LOCAL CONNECTION
axios.defaults.baseURL = 'http://localhost:3001/'

// DEPLOYED CONNECTION
// axios.defaults.baseURL = 'https://pi-countries-main-server-jakerk.up.railway.app/'

ReactDOM.render(
  <Provider store= { store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
