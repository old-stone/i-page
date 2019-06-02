const ADD_TODO = "ADD_TODO";
const EDIT_TODO = "EDIT_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

const initialState = {
  title: "TODO",
  description: "",
  todos: [
    {
      id: 0,
      title: "PC内のファイル整理",
      description: "空き容量確保",
      limit: "2020-01-01",
      isChecked: true
    },
    {
      id: 1,
      title: "Azure資格取得",
      description: "必達",
      limit: "2020-02-28",
      isChecked: false
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { title, description, isChecked, limit } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length
              ? Math.max(...state.todos.map(todo => todo.id)) + 1
              : 0,
            title,
            description,
            isChecked,
            limit
          }
        ]
      };
    }
    case EDIT_TODO: {
      const { id, title, description, isChecked, limit } = action.payload;
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === id
            ? {
                ...todo,
                title,
                description,
                isChecked,
                limit
              }
            : todo
        )
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== id)
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === id
            ? {
                ...todo,
                isChecked: !todo.isChecked
              }
            : todo
        )
      };
    }
    default: {
      return state;
    }
  }
};

export const addTodo = (title, description, limit) => {
  return {
    type: ADD_TODO,
    payload: {
      title,
      description,
      isChecked: false,
      limit
    }
  };
};

export const editTodo = (id, title, description, isChecked, limit) => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      title,
      description,
      isChecked,
      limit
    }
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  };
};

export default reducer;
