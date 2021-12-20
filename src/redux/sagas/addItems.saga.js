import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchAddItem() {
  try {
    const response = yield axios.get('/api/add_items', config);
    yield put({ type: 'SET_ADDITEMS', payload: response.data });
  } catch (error) {
    console.log('Item get request failed', error);
  }
}

function* addItemSaga() {
  yield takeLatest('FETCH_ADDITEM', fetchAddItem);
}

export default addItemSaga;
