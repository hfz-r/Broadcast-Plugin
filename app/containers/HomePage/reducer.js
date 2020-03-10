import produce from 'immer';
import {
  TOGGLE_STATE,
  LOAD_MESSAGES,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_ERROR,
} from './constants';

export const initialState = {
  toggled: true,
  payload: {
    messages: [],
  },
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_STATE:
        draft.toggled = action.toggled;
        break;
      case LOAD_MESSAGES:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_MESSAGES_SUCCESS:
        draft.payload.messages = action.messages.messages;
        draft.loading = false;
        break;
      case LOAD_MESSAGES_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default homeReducer;
