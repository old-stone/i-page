import { put, select, takeEvery } from "redux-saga/effects";

function* fetchGroup(action) {
  try {
    const getLastLinkId = state =>
      state.linkAppReducers.linksReducer.allIds[
        state.linkAppReducers.linksReducer.allIds.length - 1
      ];
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

function* fetchLinkApp(action) {
  try {
    const getLastGroupId = state =>
      state.linkAppReducers.groupsReducer.allIds[
        state.linkAppReducers.groupsReducer.allIds.length - 1
      ];
    const lastGroupId = yield select(getLastGroupId);
    yield put({
      type: "ADD_GROUP_TO_LINK_APP",
      payload: {
        groupId: lastGroupId
      }
    });
  } catch (e) {
    console.error(e);
  }
}

function* saga() {
  yield takeEvery("GROUP_FETCH_REQUESTED", fetchGroup);
  yield takeEvery("LINK_APP_FETCH_REQUESTED", fetchLinkApp);
}

export default saga;
