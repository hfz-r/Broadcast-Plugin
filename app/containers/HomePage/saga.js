import Cookies from 'js-cookie';
import { call, put, takeLatest } from 'redux-saga/effects';
import { path } from 'ramda';
import { LOAD_MESSAGES } from 'containers/HomePage/constants';
import * as actions from 'containers/HomePage/actions';
import request from 'utils/request';

const apiUrl = process.env.API_URL;

export function* handleAuth() {
  try {
    const guid = Cookies.get('brdcst.xguid');
    if (!guid) throw new Error('Session not found');
    const { token } = yield call(request, `${apiUrl}/auth/${guid}`);
    yield put(actions.setToken(token));
    return token;
  } catch (e) {
    throw e;
  }
}

export function* getMessages(action) {
  const { project } = action.payload;
  try {
    yield put(actions.loadMessagesLoading());
    // const token = yield call(handleAuth);
    // const { messages } = yield call(request, `${apiUrl}/messages`, {
    //   token,
    // });
    const { messages } = yield call(
      request,
      `${apiUrl}/messages?tag=${project}`,
    );
    yield put(actions.messagesLoaded(messages));
  } catch (e) {
    const status = path(['response', 'status'], e);
    if (status === 403) {
      yield put(actions.messageLoadingError(new Error('Permission denied')));
    } else {
      yield put(actions.messageLoadingError(e));
    }
  }
}

export default function* broadcastData() {
  yield takeLatest(LOAD_MESSAGES, getMessages);
}
