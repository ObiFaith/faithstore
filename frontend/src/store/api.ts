import axios from "axios";
import { useStore } from ".";
import type { Product } from "./type";

export const apiUrl: string = import.meta.env.VITE_API_URL;

export const useApi = () => {
  const { dispatch } = useStore();
  const isUser = localStorage.getItem("isUser");

  const fetchData = async () => {
    try {
      const { data: products }: { data: Array<Product> } = await axios(
        `${apiUrl}/products`
      );

      dispatch({ type: "SET_PRODUCTS", payload: products });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddToCart = async (productId: string) => {
    try {
      const response = await fetch(
        `${apiUrl}/api/ViewCart/AddToCart`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productId,
            cartQuantity: 1,
            userId: parseInt(isUser as string),
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to add product to cart");

      const cartData = await response.json();
      dispatch({ type: "ADD_TO_CART", payload: cartData });
    } catch (error) {
      console.error("Error during AddToCart:", error);
    }
  };

  const increaseQty = async (cartId: string) => {
    try {
      const response = await fetch(
        `${apiUrl}/api/ViewCart/IncreaseProduct`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cartId }),
        }
      );

      if (!response.ok)
        throw new Error("Failed to increase product quantity in cart");
      dispatch({ type: "INCREASE_CART_QTY", payload: { cartId } });
    } catch (error) {
      console.error("Error during IncreaseProduct:", error);
    }
  };

  const decreaseQty = async (cartId: string) => {
    try {
      const response = await fetch(
        `${apiUrl}/api/ViewCart/DecreaseProduct`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cartId }),
        }
      );

      if (!response.ok)
        throw new Error("Failed to decrease product quantity in cart");
      dispatch({ type: "DECREASE_CART_QTY", payload: { cartId } });
    } catch (error) {
      console.error("Error during DecreaseProduct:", error);
    }
  };

  return {
    fetchData,
    decreaseQty,
    increaseQty,
    handleAddToCart,
  };
};
