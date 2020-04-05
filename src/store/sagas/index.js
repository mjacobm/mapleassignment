import { takeEvery, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {fetchProvidersSaga} from "./providers";
import {fetchServicesSaga} from "./services";

export function* watchProviders() {
  yield takeEvery(actionTypes.FETCH_PROVIDERS, fetchProvidersSaga);
}

export function* watchServices() {
  yield takeEvery(actionTypes.FETCH_SERVICES, fetchServicesSaga);
}