import { useApi } from "../store/api";
import type { CartItemProps } from "./type";

const ProductQuantity = ({ item }: { item: CartItemProps }) => {
  const { increaseQty, decreaseQty } = useApi();

  return (
    <>
      <span
        className="text-[#858585] cursor-pointer"
        onClick={() => decreaseQty(item.cartId)}
      >
        -
      </span>
      <span className="bg-[#F6F7F9] text-black">{item.cartQuantity}</span>
      <span
        className="text-[#858585] cursor-pointer"
        onClick={() => increaseQty(item.cartId)}
      >
        +
      </span>
    </>
  );
};

export default ProductQuantity;
