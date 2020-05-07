import * as T from './constants';

export function toggleState(toggled) {
  return {
    type: T.TOGGLE_STATE,
    toggled,
  };
}

export function setToken(token) {
  return {
    type: T.SET_TOKEN,
    payload: { token },
  };
}

export function loadMessages() {
  return {
    type: T.LOAD_MESSAGES,
  };
}

export function loadMessagesLoading() {
  return {
    type: T.LOAD_MESSAGES_LOADING,
  };
}

export function messagesLoaded(messages) {
  return {
    type: T.LOAD_MESSAGES_SUCCESS,
    payload: { messages },
  };
}

export function messageLoadingError(error) {
  return {
    type: T.LOAD_MESSAGES_ERROR,
    payload: { error },
  };
}
