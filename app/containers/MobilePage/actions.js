import { TOGGLE_ALERT_STATE } from './constants';

export function toggleAlertState(toggledAlert) {
  return {
    type: TOGGLE_ALERT_STATE,
    toggledAlert,
  };
}
