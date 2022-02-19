import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/router';
import { store } from './store/store';

ReactDOM.render(
  <React.StrictMode>

      <Provider store={store}>
          <BrowserRouter>
                  <AppRouter/>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

