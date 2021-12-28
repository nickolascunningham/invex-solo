const initialState = {
  items: [],
  filteredItems: [],
  add_item_success: false,
};

const addItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return {
        ...state,
        items: action.payload,
      filteredItems: action.payload,
      };
    case "SET_ITEM":
      return {
        ...state,
        filteredItems: [...state.filteredItems, action.payload],
        add_item_success: "success",
      };

    case "FILTERED_ITEMS":
      return {
        ...state,
        filteredItems:  state.items.filter((item) => {
          const regex = new RegExp(`^${action.payload}`, "gi"); //The RegExp object is used for matching text with a pattern.
          //The "gi" modifier is used to do a case insensitive search of all occurrences of a regular expression in a string.
          return item.title.match(regex);
        })
      };

    case "ITEM_SUCCESS":
      return {
        ...state,
        add_item_success: true,
      };

    case "UPDATE_DELETE_ITEM":
      return {
        ...state,
        filteredItems: state.filteredItems.filter((item) => item.id !== action.payload),
        items: state.items.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default addItemReducer;
