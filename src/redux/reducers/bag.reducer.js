
const initialState = {
    bags: [],
}


const bagReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'POST_BAG':
        return {
            ...state,
            bags: [...state.bags, action.payload],
            
        };
        case 'SET_BAGS':
            return{
                ...state,
                bags: action.payload
            };

            case "UPDATE_DELETE_BAG":
                return {
                  ...state,
                  bags: state.bags.filter((bag) => bag.id !== action.payload),
                 
                };
          
    
         
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default bagReducer;
  