import { takeLatest, all, put, fork, call } from "redux-saga/effects";
import * as types from "./productAction";

import { getproduct } from "./api";

export function* onloadasync({ query }) {
  try {
    const response = yield call(getproduct, query);
    yield put({ type: types.PRODUCT_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.PRODUCT_FAIL, payload: error });
  }
}
export function* onLoad() {
  yield takeLatest(types.PRODUCT_START, onloadasync);
}
const resipeSaga = [fork(onLoad)];
export default function* rootSaga() {
  yield all([...resipeSaga]);
}
