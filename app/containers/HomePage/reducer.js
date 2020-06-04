import produce from 'immer';
import * as T from './constants';

export const initialState = {
  toggled: false,
  payload: {
    token: '',
    messages: [],
  },
  loading: false,
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case T.TOGGLE_STATE:
        draft.toggled = action.toggled;
        break;
      case T.SET_TOKEN:
        draft.payload.token = action.payload.token;
        break;
      case T.LOAD_MESSAGES_LOADING:
        draft.payload.messages = [];
        draft.error = '';
        draft.loading = true;
        break;
      case T.LOAD_MESSAGES_SUCCESS:
        draft.payload.messages = action.payload.messages;
        draft.error = '';
        draft.loading = false;
        break;
      case T.LOAD_MESSAGES_ERROR:
        draft.payload.messages = [];
        draft.error = action.payload.error.message;
        draft.loading = false;
        break;
    }
  });

export default homeReducer;
