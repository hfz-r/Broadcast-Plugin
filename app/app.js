import '@babel/polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';
import 'sanitize.css/sanitize.css';

import App from 'containers/App';

import LanguageProvider from 'containers/LanguageProvider';

/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './configureStore';

import { translationMessages } from './i18n';

const initialState = {};
const store = configureStore(initialState, history);

const container = ({ ...props }) => render(translationMessages, { ...props });

const render = (messages, { ...props } = {}) => (
  <Provider store={store}>
    <LanguageProvider messages={messages}>
      <ConnectedRouter history={history}>
        <App {...props} />
      </ConnectedRouter>
    </LanguageProvider>
  </Provider>
);

if (module.hot) {
  module.hot.accept(['./i18n', 'containers/App'], () => {
    window.Widget.unmount();
    render(translationMessages);
  });
}

if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/en.js'),
        import('intl/locale-data/jsonp/zh.js'),
      ]),
    )
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}

export default container;
