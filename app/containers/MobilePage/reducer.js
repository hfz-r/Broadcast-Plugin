import produce from 'immer';
import { TOGGLE_ALERT_STATE } from './constants';

export const initialState = {
  toggledAlert: true,
};

/* eslint-disable default-case, no-param-reassign */
const mobileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_ALERT_STATE:
        draft.toggledAlert = action.toggledAlert;
        break;
    }
  });

export default mobileReducer;
