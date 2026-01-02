import { useMemo } from "react";
import { useStore } from "../store";
import { Link } from "react-router-dom";
import { Btn, ProductQuantity } from "..";
import { arrowRight2, del, naira } from "../assets";

const Dropdown = ({ name }: { name: string }) => {
  const {
    state: { cart, favourite },
    dispatch,
  } = useStore();
  const addFavToCart = () => {
    dispatch({
      type: "ADD_FAV_TO_CART",
      payload: favourite.filter(
        item => !cart.find(cartItem => cartItem.id === item.id)
      ),
    });
    dispatch({ type: "CLEAR_FAVOURITE" });
  };
  const data = name === "Cart" ? cart : favourite;

  const total = useMemo(
    () =>
      data
        .reduce(
          (acc, curr) =>
            acc +
            (curr.discountPrice
              ? curr.price - curr.price * (curr.discountPrice / 100)
              : Number(curr.price)) *
              curr.cartQuantity,
          0
        )
        .toFixed(2),
    [data]
  );

  return data.length > 0 ? (
    <div>
      <div
        className={`${
          data.length > 2
            ? "h-87.5 dropdown overflow-hidden overflow-y-scroll"
            : ""
        } py-4 px-5`}
      >
        <h2 className="text-lg font-medium">
          {name == "Cart" ? "Total in Cart" : "Favourite Item"} ({data.length})
        </h2>
        {data.map((item, index) => (
          <div key={item.cartId || item.id}>
            <div
              className={`flex gap-3 ${
                index != data.length - 1 ? "my-5" : "mt-5"
              }`}
            >
              <img
                src={`/src/assets/images/${item.imagePath}`}
                alt={item.name}
                width={66}
                className="rounded-sm object-cover"
              />
              <div className="w-full">
                <div className="flex justify-between gap-2">
                  <Link
                    to={`/product/${item.productId}`}
                    className="text-[#121212] pb-1 font-medium lg:text-lg text-base hover:text-[#333] hover:underline"
                  >
                    {item.name.length > 12
                      ? item.name.slice(0, 12) + "..."
                      : item.name}
                  </Link>
                  <p className="font-bold">
                    <span className="line-through">N</span>
                    {(
                      (item.discountPrice
                        ? (
                            item.price -
                            item.price * (item.discountPrice / 100)
                          ).toFixed(2)
                        : item.price) * item.cartQuantity
                    ).toFixed(2)}
                  </p>
                </div>
                <div className="text-xs pt-1 pb-3">
                  {item.price && (
                    <div>
                      <span className="text-[#858585]">Price: </span>
                      <span className="text-[#323231] font-medium">
                        <span className="line-through">N</span>
                        {item.price}
                      </span>
                    </div>
                  )}
                  {item.color && (
                    <div>
                      <span className="text-[#858585]">Color: </span>
                      <span className="text-[#323231] font-medium">
                        {item.color}
                      </span>
                    </div>
                  )}
                  {item.sizes && (
                    <div>
                      <span className="text-[#858585]">Size: </span>
                      <span className="text-[#323231] font-medium">
                        {item.sizes}
                      </span>
                    </div>
                  )}
                  {item.quantity && (
                    <div>
                      <span className="text-[#858585]">Qty: </span>
                      <span className="text-[#323231] font-medium">
                        {item.quantity}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex justify-between gap-2 items-center">
                  <div className="flex items-center gap-2 *:px-2 *:cursor-pointer *:font-medium *:border *:border-[#E8E8E8]">
                    <ProductQuantity item={item} />
                  </div>
                  <img
                    src={del}
                    alt="Delete"
                    onClick={() =>
                      dispatch({
                        type:
                          name == "Cart"
                            ? "REMOVE_FROM_CART"
                            : "REMOVE_FROM_FAVOURITE",
                        payload: item,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            {index != data.length - 1 && <hr />}
          </div>
        ))}
      </div>
      <div className="*:text-[#141212] *:font-bold py-4 px-5 border-t border-t-[#DDDCDC]">
        <div className="flex justify-between">
          <h3 className="text-[#858585] font-normal">Sub-Total:</h3>
          <p className="flex">
            <img src={naira} alt="naira" />
            {Number(total).toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between pt-2 pb-3">
          <h3 className="text-[#858585] font-normal">Shipping:</h3>
          <p className="text-[#858585] font-normal">Free</p>
        </div>
        <div className="flex justify-between">
          <h3>Total:</h3>
          <p className="flex">
            <img src={naira} alt="naira" />
            {Number(total).toFixed(2)}
          </p>
        </div>
        {name == "Cart" ? (
          <div className="pt-8">
            <Btn
              btn="btn_red"
              to="/Cart"
              text="Checkout"
              rightIcon={arrowRight2}
            />
          </div>
        ) : (
          <div className="pt-8" onClick={addFavToCart}>
            <Btn
              btn="btn_red"
              to="/cart"
              text="Add to Cart"
              rightIcon={arrowRight2}
            />
          </div>
        )}
      </div>
    </div>
  ) : (
    <h2 className="text-lg font-medium py-4 px-5">{name} is Empty!</h2>
  );
};

export default Dropdown;
