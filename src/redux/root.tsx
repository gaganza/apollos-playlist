import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Store } from 'redux';

import App from 'core/app';
import { IRootState } from 'common/interfaces';

interface IRootProps {
  store: Store<IRootState>;
}

const Root = ({ store }: IRootProps): JSX.Element => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Root;
