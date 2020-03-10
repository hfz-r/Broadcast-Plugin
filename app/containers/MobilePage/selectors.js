import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMobile = state => state.mobile || initialState;

const makeSelectToggleAlert = () =>
  createSelector(
    selectMobile,
    mobileState => mobileState.toggledAlert,
  );

export { selectMobile, makeSelectToggleAlert };
