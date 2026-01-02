import type { CartItemProps } from "../components/type";

export type BaseProduct = {
  id: string;
  name: string;
  imagePath: string;
  description?: string;
  sizes: Array<string>;
  specialOffer?: string;
  discountPrice: number;
  category: "men" | "women" | "others" | "featured" | 'deals';
};

export type Product = BaseProduct & {
  price: number;
  color: string;
  rating: number;
  trackNo?: number;
  quantity: number;
};

export type FavouriteItem = Product;

export type CartItem = Product & CartItemProps;

export type StoreState = {
  products: Array<Product>;
  cart: Array<CartItem>;
  favourite: Array<FavouriteItem>;
};

export type StoreAction =
  | { type: "SET_PRODUCTS"; payload: Array<Product> }
  | { type: "SET_CART"; payload: Array<CartItem> }
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "INCREASE_CART_QTY"; payload: { cartId: string } }
  | { type: "DECREASE_CART_QTY"; payload: { cartId: string } }
  | { type: "ADD_TO_FAVOURITE"; payload: Product }
  | { type: "INCREASE_FAV_QTY"; payload: { id: string } }
  | { type: "DECREASE_FAV_QTY"; payload: { id: string } }
  | { type: "ADD_FAV_TO_CART"; payload: Array<FavouriteItem> }
  | { type: "REMOVE_FROM_CART"; payload: { id: string } }
  | { type: "REMOVE_FROM_FAVOURITE"; payload: { id: string } }
  | { type: "CLEAR_CART" }
  | { type: "CLEAR_FAVOURITE" };
