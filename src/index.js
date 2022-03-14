import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css'
import { store } from './Component/Store';
import {Provider} from 'react-redux';



ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>,
  document.getElementById('root')
);

