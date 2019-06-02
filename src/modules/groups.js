// Actions
const ADD_GROUP = "ADD_GROUP";
const ADD_ITEM_TO_GROUP = "ADD_ITEM_TO_GROUP";
const GROUP_FETCH_REQUESTED = "GROUP_FETCH_REQUESTED";

// Reducer
const initialState = {
  byId: {
    0: {
      id: 0,
      title: "検索系",
      description: "グループサンプル",
      items: [0]
    }
  },
  allIds: [0]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP:
      const nextId = state.allIds[state.allIds.length - 1] + 1 || 0;
      return {
        ...state,
        byId: {
          ...state.byId,
          [nextId]: {
            id: nextId,
            title: action.payload.title,
            items: action.payload.items
          }
        },
        allIds: [...state.allIds, nextId]
      };
    case ADD_ITEM_TO_GROUP:
      const { groupId, linkId } = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [groupId]: {
            ...state.byId[groupId],
            links: [...state.byId[groupId].links, linkId]
          }
        }
      };
    default:
      return state;
  }
};

export const addGroup = (title, description) => {
  return {
    type: ADD_GROUP,
    payload: {
      title: title,
      description: description,
      links: []
    }
  };
};

export const groupFetchRequested = groupId => {
  return { type: GROUP_FETCH_REQUESTED, payload: { groupId: groupId } };
};

export default reducer;
