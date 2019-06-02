// Actions
const ADD_LINK = "ADD_LINK";

// Reducer
const initialState = {
  todos: {
    id: "todos"
  },
  ids: {
    id: "ids"
  },
  links: {
    id: "links",
    byId: {
      0: {
        id: 0,
        title: "hoge",
        url: "http://localhost",
        description: "ほげ",
        isEditMode: false
      }
    },
    allIds: [0]
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LINK:
      const nextId = state.allIds[state.allIds.length - 1] + 1 || 0;
      return {
        ...state,
        byId: {
          ...state.byId,
          [nextId]: {
            id: nextId,
            name: action.payload.name,
            url: action.payload.url,
            description: action.payload.description,
            isEditMode: action.payload.isEditMode
          }
        },
        allIds: [...state.allIds, nextId]
      };
    default:
      return state;
  }
};

export default reducer;

// Action Creators
export const addLink = (name, url, description) => {
  return {
    type: ADD_LINK,
    payload: {
      name: name,
      url: url,
      description: description,
      isEditMode: false
    }
  };
};
