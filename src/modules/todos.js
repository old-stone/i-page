// Actions
const ADD_TODO = "ADD_TODO";

// Reducer
const initialState = {
  byId: {
    0: {
      id: 0,
      name: "サンプル",
      description: "サンプル用のグループです",
      limitTime: new Date()
    }
  },
  allIds: [0]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const nextId = state.allIds[state.allIds.length - 1] + 1 || 0;
      return {
        ...state,
        byId: {
          ...state.byId,
          [nextId]: {
            id: nextId,
            description: action.payload.description,
            limitTime: action.payload.limitTime
          }
        },
        allIds: [...state.allIds, nextId]
      };
    default:
      return state;
  }
};

export const addTodo = (name, description, limitTime) => {
  return {
    type: ADD_GROUP,
    payload: {
      name: name,
      description: description,
      limitTIme: limitTime
    }
  };
};

export default reducer;
