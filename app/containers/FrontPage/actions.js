import { TOGGLE_STATE } from './constants';

export function toggleState(toggled) {
  return {
    type: TOGGLE_STATE,
    toggled,
  };
}
