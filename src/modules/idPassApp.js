const ADD_IDPASS = "ADD_IDPASS";
const EDIT_IDPASS = "EDIT_IDPASS";
const DELETE_IDPASS = "DELETE_IDPASS";

const initialState = {
  title: "ID & Password hints",
  description: "変更機能未実装",
  items: [
    {
      id: 0,
      title: "なんかのサイト",
      url: "",
      account: "hoge",
      hint: "嫁のスリーサイズ",
      description: "1ヶ月ごとに変更する(意味深)"
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IDPASS: {
      return;
    }
    case EDIT_IDPASS: {
      return;
    }
    case DELETE_IDPASS: {
      return;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
