const ADD_GROUP_APP = "ADD_GROUP_APP";
const REQUEST_FETCH_APP = "REQUEST_FETCH_APP";

const initialState = {
  todo: {
    id: "todo",
    title: "Todo",
    description: "",
    groups: []
  },
  ids: {
    id: "ids",
    title: "ID & password hints",
    description: "",
    groups: []
  },
  links: {
    id: "links",
    title: "Links",
    description:
      "[ L:local S:vega-fs N:other server R:repository H:http(s) V:ssl-vpn ]",
    groups: [0]
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP_APP:
      return {
        ...state,
        [action.appId]: {
          ...state[action.appId],
          groups: [...state.groups, action.payload.groupId]
        }
      };
    default:
      return state;
  }
};

export const requestFetchApp = appId => {
  return { type: REQUEST_FETCH_APP, payload: { appId } };
};

export default reducer;
