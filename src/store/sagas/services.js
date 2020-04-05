import { put } from "redux-saga/effects";
import axios from 'axios';
import * as actions from "../actions/services";

export function* fetchServicesSaga(action) {
  yield put(actions.fetchServicesStart());
  try {
    const response = yield axios.get("https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services");
    yield put(actions.fetchServicesSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchServicesFail(error));
  }
}

