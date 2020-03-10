import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_MESSAGES } from 'containers/HomePage/constants';
import {
  messagesLoaded,
  messageLoadingError,
} from 'containers/HomePage/actions';

import request from 'utils/request';

export function* getMessages() {
  const requestURL = `${process.env.API_URL}/api/messages`;

  try {
    const messages = yield call(request, requestURL);
    yield put(messagesLoaded(messages));
  } catch (error) {
    yield put(messageLoadingError(error));
  }
}

export default function* broadcastData() {
  yield takeLatest(LOAD_MESSAGES, getMessages);
}
