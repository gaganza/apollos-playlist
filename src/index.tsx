import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from 'core/app';
import configureStore from 'redux/store';

document.addEventListener('DOMContentLoaded', () => {
  const root: HTMLElement = document.getElementById('root') as HTMLElement;
  const store: Store = configureStore();

  ReactDOM.render(
    <Provider store={store}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <App />
      </HashRouter>
    </Provider>,
    root
  );
});
