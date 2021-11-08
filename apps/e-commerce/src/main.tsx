import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { store } from '@ecm/store';

import App from './app/app';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);
