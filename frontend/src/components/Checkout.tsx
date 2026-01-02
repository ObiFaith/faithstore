import { Btn, Modal } from "..";
import { useState } from "react";
import type { CartItem, StoreAction } from "../store/type";
import { opay, mastercard, visa, naira, success } from "../assets";

const Checkout = ({
  cart,
  dispatch,
  subTotal,
}: {
  subTotal: string;
  cart: Array<CartItem>;
  dispatch: React.Dispatch<StoreAction>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState<string>("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setStyle("mx-auto right-0 left-0 top-[20%] rounded-lg");
  };

  return (
    <>
      <div className="bg-white flex le- max-lg:flex-col justify-between items-start lg:gap-16 gap-12 p-8 rounded-[20px]">
        {cart.length > 0 ? (
          <>
            <div className="lg:w-7/12 w-full">
              <div className="flex gap-3">
                <div className="pt-1">
                  <input type="radio" checked name="address" id="radio" />
                </div>
                <div>
                  <h3 className="text-[#141212] lg:text-xl text-lg font-medium pb-3">
                    Shipping Address
                  </h3>
                  <p className="text-[#858585]">
                    No 9, Darlington street, off engr philip avenue
                  </p>
                  <p className="text-[#858585]">Southern Kaduna</p>
                  <p className="text-[#858585]">Kaduna</p>
                </div>
              </div>
              <div className="border border-[#E4E7EC] rounded-xl p-6 my-6">
                <h3 className="text-[#141212] lg:text-xl text-lg font-medium mb-6">
                  Change Contact Information
                </h3>
                <form
                  className="flex flex-col gap-6"
                  action="#"
                  onSubmit={e => e.stopPropagation()}
                >
                  <div className="flex gap-6 justify-between">
                    <div className="flex flex-col gap-3 w-1/2 lg:w-full">
                      <label
                        htmlFor="firstName"
                        className="text-xs uppercase font-bold text-[#6C7275]"
                      >
                        first name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        className="px-4 py-2 border-[#DDDCDC]"
                      />
                    </div>
                    <div className="flex flex-col gap-3 w-1/2 lg:w-full">
                      <label
                        htmlFor="lastName"
                        className="text-xs uppercase font-bold text-[#6C7275]"
                      >
                        last name
                      </label>
                      <input
                        className="px-4 py-2 border-[#DDDCDC]"
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <label
                      htmlFor="phoneNo"
                      className="text-xs uppercase font-bold text-[#6C7275]"
                    >
                      phone number
                    </label>
                    <input
                      className="px-4 py-2 border-[#DDDCDC]"
                      inputMode="numeric"
                      type="number"
                      name="phoneNo"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <label
                      htmlFor="email"
                      className="text-xs uppercase font-bold text-[#6C7275]"
                    >
                      Email
                    </label>
                    <input
                      className="px-4 py-2 border-[#DDDCDC]"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                    />
                  </div>
                </form>
              </div>
              <div className="border border-[#E4E7EC] rounded-xl p-6">
                <h3 className="text-[#141212] lg:text-xl text-lg font-medium mb-6">
                  Add Shipping Address
                </h3>
                <form
                  className="flex flex-col gap-6"
                  action="#"
                  onSubmit={e => e.stopPropagation()}
                >
                  <div className="flex flex-col gap-3 w-full">
                    <label
                      htmlFor="address"
                      className="text-xs uppercase font-bold text-[#6C7275]"
                    >
                      Street Address *
                    </label>
                    <input
                      className="px-4 py-2 border-[#DDDCDC]"
                      type="text"
                      name="address"
                      placeholder="Street Address"
                    />
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <label
                      htmlFor="country"
                      className="text-xs uppercase font-bold text-[#6C7275]"
                    >
                      Country *
                    </label>
                    <input
                      className="px-4 py-2 border-[#DDDCDC]"
                      type="text"
                      name="country"
                      placeholder="Country"
                    />
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <label
                      htmlFor="townCity"
                      className="text-xs uppercase font-bold text-[#6C7275]"
                    >
                      Town / City *
                    </label>
                    <input
                      className="px-4 py-2 border-[#DDDCDC]"
                      type="text"
                      name="townCity"
                      placeholder="Town / City"
                    />
                  </div>
                  <div className="flex gap-6 justify-between">
                    <div className="flex flex-col gap-3 w-1/2 lg:w-full">
                      <label
                        htmlFor="state"
                        className="text-xs uppercase font-bold text-[#6C7275]"
                      >
                        State
                      </label>
                      <input
                        className="px-4 py-2 border-[#DDDCDC]"
                        type="text"
                        name="state"
                        placeholder="State"
                      />
                    </div>
                    <div className="flex flex-col gap-3 w-1/2 lg:w-full">
                      <label
                        htmlFor="zipCode"
                        className="text-xs uppercase font-bold text-[#6C7275]"
                      >
                        Zip Code
                      </label>
                      <input
                        className="px-4 py-2 border-[#DDDCDC]"
                        type="text"
                        name="zipCode"
                        placeholder="Zip Code"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" name="address" id="" />
                    <p className="text-[#6C7275]">
                      Use a different billing address (optional)
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className=" w-full lg:w-5/12 border border-[#E4E7EC] rounded-xl p-6">
              <h2 className="pb-6 text-[#093459] font-medium lg:text-lg">
                Payment Information
              </h2>
              <div>
                <p className="pb-3 text-[#093459]">Apply Discount</p>
                <form
                  onClick={e => e.stopPropagation()}
                  action="#"
                  className="flex gap-4 pb-6 border-b border-[#DDDCDC]"
                >
                  <input
                    type="text"
                    name="couponCode"
                    placeholder="Enter Coupon Code"
                    className="px-4 w-full py-2 border-[#DDDCDC]"
                  />
                  <Btn to="/cart" text="Apply" btn="btn_dark" />
                </form>
                <div className="py-6 border-b border-[#DDDCDC]">
                  <div className="flex justify-between items-center">
                    <h2 className="text-[#093459] font-medium lg:text-lg">
                      Pay With
                    </h2>
                    <div className="flex gap-2">
                      <img src={visa} width={32} alt="Visa" />
                      <img src={mastercard} width={32} alt="Mastercard" />
                      <img src={opay} width={32} alt="Opay" />
                    </div>
                  </div>
                  <div className="flex gap-4 flex-col pt-5 *:text-[#3A3A3A] *:text-sm payment">
                    <div>
                      <input
                        type="radio"
                        checked
                        name="payment"
                        value="card"
                        id="radio"
                      />
                      <label htmlFor="payment">Debit or Credit Card</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="payment"
                        value="delivery"
                        id="radio"
                      />
                      <label htmlFor="payment">Pay on Delivery</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="payment"
                        value="transfer"
                        id="radio"
                      />
                      <label htmlFor="payment">Transfer to Bank</label>
                    </div>
                  </div>
                </div>
                <div className="py-6 border-b border-[#DDDCDC]">
                  <h2 className="text-[#093459] font-medium lg:text-lg pb-4">
                    Enter Card Information
                  </h2>
                  <form
                    className="flex flex-col gap-6"
                    action="#"
                    onSubmit={e => e.stopPropagation()}
                  >
                    <div className="flex flex-col gap-3 ">
                      <label
                        htmlFor="cardholder"
                        className="text-xs uppercase font-bold text-[#6C7275]"
                      >
                        Cardholder Name
                      </label>
                      <input
                        className="px-4 py-2 border-[#DDDCDC]"
                        type="text"
                        name="cardholder"
                        placeholder="Belrah Mercy"
                      />
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <label
                        htmlFor="cardNo"
                        className="text-xs uppercase font-bold text-[#6C7275]"
                      >
                        Card Number
                      </label>
                      <input
                        className="px-4 py-2 border-[#DDDCDC]"
                        type="text"
                        name="cardNo"
                        placeholder="5061 2345 6789 1234"
                      />
                    </div>
                    <div className="flex w-full gap-2 justify-between">
                      <div className="flex w-1/2 flex-col gap-3">
                        <label
                          htmlFor="expiryDate"
                          className="text-xs uppercase font-bold text-[#6C7275]"
                        >
                          Expiry Date
                        </label>
                        <input
                          className="px-4 py-2 border-[#DDDCDC]"
                          type="date"
                          name="expiryDate"
                          placeholder="09/2024"
                        />
                      </div>
                      <div className="flex w-1/2 flex-col gap-3">
                        <label
                          htmlFor="CVV"
                          className="text-xs uppercase font-bold text-[#6C7275]"
                        >
                          CVV
                        </label>
                        <input
                          className="px-4 py-2 border-[#DDDCDC]"
                          type="number"
                          name="CVV"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </form>
                </div>
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
                    <img src={naira} alt="naira" /> 54990
                  </span>
                </div>
                <div
                  className="w-full lg:w-full md:w-3/5 mx-auto"
                  onClick={toggleModal}
                >
                  <Btn to="/cart" text="Pay with Card" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="font-medium text-center lg:text-lg w-full">
            Add product to cart for checkout!
          </div>
        )}
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} style={style} toggleModal={toggleModal}>
          {/* Payment Successful Page */}
          <div className="py-12 px-6">
            <div className="grid place-items-center">
              <img width={72} src={success} alt="Payment Success" />
              <p className="text-[#6C7275] text-xl pt-6">Thank You!</p>
              <h3 className="text-[#23262F] text-3xl font-medium">
                Payment Successful
              </h3>
            </div>
            <div className="flex justify-center gap-6 font-medium py-5">
              <div className="flex flex-col gap-2 text-[#6C7275]">
                <p>Order code:</p>
                <p>Date:</p>
                <p>Total:</p>
              </div>
              <div className="flex flex-col gap-2 text-[#141212]">
                <p>#0123_45678</p>
                <p>April 30, 2024</p>
                <p className="flex gap-1">
                  <img src={naira} alt="naira" />
                  {Number(subTotal) - 935}
                </p>
              </div>
            </div>
            <p className="text-[#858585] text-balance text-center">
              Your order have been received and will be processed within next
              hour. Look out for our confirmation email and delivery details.
            </p>
            <div
              className="pt-8"
              onClick={() => dispatch({ type: "CLEAR_CART" })}
            >
              <Btn text="Back to Store" to="/" btn="btn_dark" />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Checkout;
