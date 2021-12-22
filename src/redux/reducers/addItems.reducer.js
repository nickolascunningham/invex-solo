const initialState = {
  items: [],
   add_item_success: false
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
        items: [...state.items, action.payload],
        add_item_success: "success"
      };

      case 'ITEM_SUCCESS':
        return {
          ...state,
          add_item_success: true
        };

        case 'UPDATE_DELETE_ITEM': 
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload)
        }

    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default addItemReducer;
