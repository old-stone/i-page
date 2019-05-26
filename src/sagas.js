import { put, select, takeEvery } from "redux-saga/effects";

function* fetchGroup(action) {
  try {
    const getLastLinkId = state =>
      state.linksReducer.allIds[state.linksReducer.allIds.length - 1];
    const lastLinkId = yield select(getLastLinkId);
    yield put({
      type: "ADD_LINK_TO_GROUP",
      payload: {
        groupId: action.payload.groupId,
        linkId: lastLinkId
      }
    });
  } catch (e) {
    console.error(e);
  }
}

function* saga() {
  yield takeEvery("GROUP_FETCH_REQUESTED", fetchGroup);
}

export default saga;
