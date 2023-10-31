import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { mystore } from './redux/store';
import { Provider } from 'react-redux';
import ConetxtProvider from './contextApi/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={mystore}>
    <BrowserRouter>
    <ConetxtProvider>
      <App />
    </ConetxtProvider>
    </BrowserRouter>
  </Provider>

);


