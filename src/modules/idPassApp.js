const ADD_IDPASS = "ADD_IDPASS";
const EDIT_IDPASS = "EDIT_IDPASS";
const DELETE_IDPASS = "DELETE_IDPASS";

const initialState = {
  title: "ID & Password hints",
  description: "",
  items: [
    {
      id: 0,
      title: "なんかのサイト",
      url: "http://localhost:3000",
      account: "hoge",
      hint: "嫁のスリーサイズ",
      description: "1ヶ月ごとに変更する(意味深)"
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IDPASS: {
      const { title, url, account, hint, description } = action.payload;
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: state.items.length
              ? Math.max(...state.items.map(item => item.id)) + 1
              : 0,
            title,
            url,
            account,
            hint,
            description
          }
        ]
      };
    }
    case EDIT_IDPASS: {
      const { id, title, url, account, hint, description } = action.payload;
      return {
        ...state,
        items: state.items.map(item =>
          item.id === id
            ? {
                ...item,
                title,
                url,
                account,
                hint,
                description
              }
            : item
        )
      };
    }
    case DELETE_IDPASS: {
      const { id } = action.payload;
      return {
        ...state,
        items: state.items.filter(item => item.id !== id)
      };
    }
    default: {
      return state;
    }
  }
};

export const addIdPass = (title, url, account, hint, description) => {
  return {
    type: ADD_IDPASS,
    payload: {
      title,
      url,
      account,
      hint,
      description
    }
  };
};

export const editIdPass = (id, title, url, account, hint, description) => {
  return {
    type: EDIT_IDPASS,
    payload: {
      id,
      title,
      url,
      account,
      hint,
      description
    }
  };
};

export const deleteIdPass = id => {
  return {
    type: DELETE_IDPASS,
    payload: {
      id
    }
  };
};

export default reducer;
