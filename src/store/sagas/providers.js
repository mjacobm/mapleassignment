import { put } from "redux-saga/effects";
import axios from 'axios';
import * as actions from "../actions/providers";

export function* fetchProvidersSaga(action) {
  yield put(actions.fetchProvidersStart());
  try {
  const response = yield axios.get("https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10");
    yield put(actions.fetchProvidersSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchProvidersFail(error));
  }
}

