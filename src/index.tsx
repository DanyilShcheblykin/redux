import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { reduxToolkitStore } from './redux-toolkit-store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={reduxToolkitStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


