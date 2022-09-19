import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import LangProvider from './Lang/LangContext';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </LangProvider>
  </React.StrictMode>
);
