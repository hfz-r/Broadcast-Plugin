import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectToggle = () =>
  createSelector(
    selectHome,
    homeState => homeState.toggled,
  );

const makeSelectMessages = () =>
  createSelector(
    selectHome,
    homeState => homeState.payload.messages,
  );

const makeSelectLoading = () =>
  createSelector(
    selectHome,
    homeState => homeState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectHome,
    homeState => homeState.error,
  );

export {
  selectHome,
  makeSelectToggle,
  makeSelectMessages,
  makeSelectLoading,
  makeSelectError,
};
