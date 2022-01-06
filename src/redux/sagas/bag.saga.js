import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* addBag(action) {
  const { data } = action;
  try {
    const response = yield axios.post("/api/bag", data);
    console.log(response, "response from acttttt");
    if (response.data === "ERROR") {

      alert("bag exists!!!");
    }else{
      yield put({ type: "POST_BAG", payload: response.data });
    }
  
  } catch (error) {
    console.log("Item post request failed", error);
  }
}

function* fetchBags() {
  try {
    const response = yield axios.get("/api/bag");

    yield put({ type: "SET_BAGS", payload: response.data });
  } catch (error) {
    console.log("Bags get request failed", error);
  }
}

function* deleteBag(action) {
  try {
    const { data } = action;

    yield axios.delete(`/api/bag/${data}`);
    yield put({ type: "UPDATE_DELETE_BAG", payload: data });
  } catch (error) {
    console.log(error);
  }
}

function* bagSaga() {
  yield takeLatest("ADD_BAG", addBag);
  yield takeLatest("FETCH_BAGS", fetchBags);
  yield takeLatest("DELETE_BAG", deleteBag);
}


export default bagSaga;
