import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import homeReducer from 'containers/HomePage/reducer';
import mobileReducer from 'containers/MobilePage/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    home: homeReducer,
    mobile: mobileReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
