import { useStore } from "../store";
import { useMemo, useState } from "react";
import { Cart, Checkout, Order, Tabs } from "..";

const OrderSummary = () => {
  const {
    state: { cart },
    dispatch,
  } = useStore();
  const [activeTab, setActiveTab] = useState<number>(0);
  const subTotal = useMemo(
    () =>
      cart
        .reduce(
          (acc, curr) =>
            acc +
            (curr.discountPrice
              ? Number(curr.price - curr.price * (curr.discountPrice / 100))
              : Number(curr.price)) *
              curr.cartQuantity,
          0
        )
        .toFixed(2),
    [cart]
  );

  return (
    <section className="max-container">
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        className="justify-center py-16"
        summary={true}
        config={[
          {
            header: "Shopping cart",
            label: "Order",
            component: (
              <Cart
                subTotal={subTotal}
                cart={cart}
                dispatch={dispatch}
                setActiveTab={setActiveTab}
              />
            ),
          },
          {
            header: "Order Confirmation",
            label: "Confirmation",
            component: (
              <Order
                subTotal={subTotal}
                cart={cart}
                setActiveTab={setActiveTab}
              />
            ),
          },
          {
            header: "Checkout Details",
            label: "Checkout Details",
            component: (
              <Checkout subTotal={subTotal} cart={cart} dispatch={dispatch} />
            ),
          },
        ]}
      />
    </section>
  );
};

export default OrderSummary;
