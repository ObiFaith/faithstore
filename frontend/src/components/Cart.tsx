import { Link } from "react-router-dom";
import { Btn, ProductQuantity } from "..";
import { remove, naira } from "../assets";
import type { CartItem, StoreAction } from "../store/type";

const Cart = ({
  cart,
  dispatch,
  subTotal,
  setActiveTab,
}: {
  subTotal: string;
  cart: Array<CartItem>;
  dispatch: React.Dispatch<StoreAction>;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="bg-white flex max-lg:flex-col justify-between items-start lg:gap-16 gap-12 *:text-[#121212] p-8 rounded-[20px]">
      {cart.length > 0 ? (
        <>
          <div className="lg:w-8/12 w-full">
            <table className="w-full">
              <thead>
                <tr className="*:font-medium *:pb-4 border-b border-[#DDDCDC]">
                  <th className="lg:w-3/6 text-left">Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className="*:py-6 border-b border-[#DDDCDC]">
                    <td className="flex gap-3 items-center">
                      <img
                        src={`/src/assets/images/${item.imagePath}`}
                        alt={item.name}
                        width={72}
                      />
                      <span>
                        {item.color && (
                          <span className="text-xs text-[#6C7275]">
                            Color: {item.color}
                          </span>
                        )}
                        <span
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: { id: item.cartId },
                            })
                          }
                          className="flex text-xs text-[#E33B32] cursor-pointer hover:underline"
                        >
                          <img src={remove} alt="Delete" />
                          Remove
                        </span>
                      </span>
                    </td>
                    <td>
                      <div className="bg-[#F6F7F9] py-2 *:text-[#121212] px-4 *:font-medium rounded-lg flex justify-between">
                        <ProductQuantity item={item} />
                      </div>
                    </td>
                    <td>
                      <span className="flex gap-1 justify-end">
                        <img src={naira} alt="naira" />
                        {Number(
                          item.discountPrice
                            ? item.price -
                                (item.price * item.discountPrice) / 100
                            : item.price
                        ).toFixed(2)}
                      </span>
                    </td>
                    <td>
                      <span className="flex gap-1 justify-end">
                        <img src={naira} alt="naira" />
                        {(
                          Number(
                            item.discountPrice
                              ? item.price -
                                  (item.price * item.discountPrice) / 100
                              : item.price
                          ) * item.cartQuantity
                        ).toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className=" w-full lg:w-4/12 border border-[#E4E7EC] rounded-xl p-6">
            <h2 className="pb-2 border-b border-[#DDDCDC] text-[#093459] font-medium lg:text-lg">
              Cart Summary
            </h2>
            <div className="my-6 flex flex-col gap-4 *:text-[#475367] pb-4 border-b border-[#DDDCDC] *:text-sm">
              <div className="flex justify-between gap-2">
                <span>Sub Total</span>
                <span className="text-[#1E1E1E] text-base font-medium flex gap-1">
                  <img src={naira} alt="naira" />
                  {subTotal}
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span>Tax (10%)</span>
                <span className="flex gap-1">
                  <img src={naira} alt="naira" /> 85.00
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span>Discount (20%)</span>
                <span className="flex gap-1">
                  <img src={naira} alt="naira" /> 850.00
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span>Delivery</span>
                <span className="flex gap-1">
                  <img src={naira} alt="naira" /> 0
                </span>
              </div>
            </div>
            <div className="flex justify-between pb-6">
              Total
              <span className="flex gap-1">
                <img src={naira} alt="naira" /> {Number(subTotal) - 935}
              </span>
            </div>
            <div
              className="w-full lg:w-full md:w-3/5 mx-auto"
              onClick={() => setActiveTab(2)}
            >
              <Btn to="/cart" text="Proceed to Checkout" />
            </div>
            <div className="pt-6">
              <h3 className="text-[#323231] font-medium">Return Policy</h3>
              <p className="text-[#858585] text-sm">
                returning an item is very easy. read details
                <Link to="#" className="text-[#35A0FC] hover:underline">
                  here
                </Link>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="font-medium text-center lg:text-lg w-full">
          No Product yet!
        </div>
      )}
    </div>
  );
};

export default Cart;
