import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectFront = state => state.front || initialState;

const makeSelectToggle = () =>
  createSelector(
    selectFront,
    frontState => frontState.toggled,
  );

export { selectFront, makeSelectToggle };
