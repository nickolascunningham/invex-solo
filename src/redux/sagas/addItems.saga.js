import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* addItem(action) {
  const { data } = action;
  try {
    const response = yield axios.post("/api/items", data);

    yield put({ type: "SET_ITEM", payload: response.data });
  } catch (error) {
    console.log("Item post request failed", error);
  }
}

function* editItem(action) {
  const { data } = action;
  const item = {
    title: data.title,
    description: data.description
  }

  console.log(data, "dataaa");
  try {
    const response = yield axios.put(`/api/items/${data.id}`, item);

    yield put({ type: "EDIT_ITEM", payload: response.data });
  } catch (error) {
    console.log("Item PUT request failed", error);
  }
}

function* fetchItems(action) {
  const { data } = action;

  try {
    const response = yield axios.get("/api/items");

    const filteredItems = response.data.filter(
      (item) => item.category.toLowerCase() === data.toLowerCase()
    );

    yield put({ type: "SET_ITEMS", payload: filteredItems });
  } catch (error) {
    console.log("Items get request failed", error);
  }
}

function* getFilteredItems(action) {
  const { data } = action;
  yield put({ type: "FILTERED_ITEMS", payload: data });
}

function* deleteItem(action) {
  try {
    const { data } = action;

    yield axios.delete(`/api/items/${data}`);
    yield put({ type: "UPDATE_DELETE_ITEM", payload: data });
  } catch (error) {
    console.log(error);
  }
}

function* addItemSaga() {
  yield takeLatest("ADD_ITEM", addItem);
  yield takeLatest("FETCH_ITEMS", fetchItems);
  yield takeLatest("DELETE_ITEM", deleteItem);
  yield takeLatest("UPDATE_ITEM", editItem);
  yield takeLatest("GET_FILTERED_ITEMS", getFilteredItems);
}

export default addItemSaga;
