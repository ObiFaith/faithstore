import type { StoreAction, StoreState } from "./type";

export const reducer = (state: StoreState, action: StoreAction): StoreState => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };

    case "SET_CART":
      return { ...state, cart: action.payload };

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };

    case "INCREASE_CART_QTY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.cartId
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        ),
      };

    case "DECREASE_CART_QTY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.cartId
            ? { ...item, cartQuantity: item.cartQuantity - 1 }
            : item
        ),
      };

    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favourite: [...state.favourite, { ...action.payload, quantity: 1 }],
      };

    case "INCREASE_FAV_QTY":
      return {
        ...state,
        favourite: state.favourite.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE_FAV_QTY":
      return {
        ...state,
        favourite: state.favourite.map(item =>
          item.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case "ADD_FAV_TO_CART":
      return { ...state, cart: [...state.cart, ...action.payload] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(c => c.id !== action.payload.id),
      };

    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "CLEAR_FAVOURITE":
      return { ...state, favourite: [] };

    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        favourite: state.favourite.filter(c => c.id !== action.payload.id),
      };
    default:
      return state;
  }
};
