import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* addItem(action) {
  const {data} = action
  try {
    const response = yield axios.post('/api/items', data);
   
    yield put({ type: 'SET_ITEM', payload: response.data });
  } catch (error) {
    console.log('Item post request failed', error);
  }
}


function* fetchItems () {
  try{

    const response = yield axios.get('/api/items')
    console.log(response.data, ",==response from api")
    yield put({ type: 'SET_ITEMS', payload: response.data });
    yield put({ type: 'ITEM_SUCCESS'});

  }catch(error){
    console.log('Items get request failed', error);
  }
}



function* addItemSaga() {
  yield takeLatest('ADD_ITEM', addItem);
  yield takeLatest('FETCH_ITEMS', fetchItems);
}

export default addItemSaga;
