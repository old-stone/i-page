const ADD_LINK_GROUP = "ADD_LINK_GROUP";
const EDIT_LINK_GROUP = "EDIT_LINK_GROUP";
const DELETE_LINK_GROUP = "DELETE_LINK_GROUP";
const ADD_LINK = "ADD_LINK";
const EDIT_LINK = "EDIT_LINK";
const DELETE_LINK = "DELETE_LINK";

const initialState = {
  title: "Links",
  description:
    "[ L:local S:file server N:other server R:repository H:http(s) V:ssl-vpn ]",
  groups: [
    {
      id: 0,
      title: "リンクグループ",
      description: "グループの詳細",
      items: [
        {
          id: 0,
          title: "リンクアイテム",
          description: "リンクアイテムの詳細",
          url: "http://localhost:3000"
        }
      ]
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LINK_GROUP: {
      const { title, description } = action.payload;
      return {
        ...state,
        groups: [
          ...state.groups,
          {
            id: state.groups.length
              ? Math.max(...state.groups.map(group => group.id)) + 1
              : 0,
            title,
            description,
            items: []
          }
        ]
      };
    }
    case EDIT_LINK_GROUP: {
      const { groupId, title, description } = action.payload;
      return {
        ...state,
        groups: state.groups.map(group =>
          group.id === groupId ? { ...group, title, description } : group
        )
      };
    }
    case DELETE_LINK_GROUP: {
      const { groupId } = action.payload;
      return {
        ...state,
        groups: state.groups.filter(group => group.id !== groupId)
      };
    }
    case ADD_LINK: {
      const { groupId, title, url, description } = action.payload;
      return {
        ...state,
        groups: state.groups.map(group =>
          group.id === groupId
            ? {
                ...group,
                items: [
                  ...group.items,
                  {
                    id: group.items.length
                      ? Math.max(...group.items.map(item => item.id)) + 1
                      : 0,
                    title,
                    description,
                    url
                  }
                ]
              }
            : group
        )
      };
    }
    case EDIT_LINK: {
      const { groupId, itemId, title, url, description } = action.payload;
      return {
        ...state,
        groups: state.groups.map(group =>
          group.id === groupId
            ? {
                ...group,
                items: group.items.map(item =>
                  item.id === itemId
                    ? {
                        ...item,
                        title,
                        url,
                        description
                      }
                    : item
                )
              }
            : group
        )
      };
    }
    case DELETE_LINK: {
      const { groupId, itemId } = action.payload;
      return {
        ...state,
        groups: state.groups.map(group =>
          group.id === groupId
            ? {
                ...group,
                items: group.items.filter(item => item.id !== itemId)
              }
            : group
        )
      };
    }
    default: {
      return state;
    }
  }
};

export const addLinkGroup = (title, description) => {
  return {
    type: ADD_LINK_GROUP,
    payload: {
      title,
      description
    }
  };
};

export const editLinkGroup = (groupId, title, description) => {
  return {
    type: EDIT_LINK_GROUP,
    payload: {
      groupId,
      title,
      description
    }
  };
};

export const deleteLinkGroup = groupId => {
  return {
    type: DELETE_LINK_GROUP,
    payload: {
      groupId
    }
  };
};

export const addLink = (groupId, title, url, description) => {
  return {
    type: ADD_LINK,
    payload: {
      groupId,
      title,
      url,
      description
    }
  };
};

export const editLink = (groupId, itemId, title, url, description) => {
  return {
    type: EDIT_LINK,
    payload: {
      groupId,
      itemId,
      title,
      url,
      description
    }
  };
};

export const deleteLink = (groupId, itemId) => {
  return {
    type: DELETE_LINK,
    payload: {
      groupId,
      itemId
    }
  };
};

export default reducer;
