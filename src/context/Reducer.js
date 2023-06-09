const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    case "INCREMENT_QTY":
      return {
        ...state,
        cart: state.cart.filter((e) =>
          e.id === action.payload.id ? (e.qty = e.qty + 0.5) : e.qty
        ),
      };

    case "DECREMENT_QTY":
      return {
        ...state,
        cart: state.cart.filter((e) =>
          e.id === action.payload.id && e.qty > 1
            ? (e.qty = e.qty - 0.5)
            : e.qty
        ),
      };

    case "CHANGE_QTY":
      return {
        ...state,
        cart: state.cart.filter((e) =>
          e.id === action.payload.id ? (e.qty = action.payload) : e.qty
        ),
      };
    default: {
      return state;
    }
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_ASCENDING":
      return {
        ...state,
        sort: action.payload,
      };

    case "FILTER_BY_STOCK":
      return {
        ...state,
        byStock: !state.byStock,
      };

    case "FILTER_BY_DELIVERY":
      return {
        ...state,
        byFastDelivery: !state.byFastDelivery,
      };

    case "CLEAR_FILTER":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      };

      case "SERCH_QUERY":
        return{
          ...state,
          searchQuery:action.payload
        }


    default:
      return state;
  }
};

export default cartReducer;
