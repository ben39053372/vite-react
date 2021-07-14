import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/common/index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
