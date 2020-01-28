import produce from 'immer';
import { TOGGLE_STATE } from './constants';

export const initialState = {
  toggled: true,
};

/* eslint-disable default-case, no-param-reassign */
const frontReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_STATE:
        draft.toggled = action.toggled;
        break;
    }
  });

export default frontReducer;
