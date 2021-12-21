const initialState = {
  items: []
}

const addItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEMS': 
    return {
     ...state,
     items: action.payload
    };
    case 'SET_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default addItemReducer;
