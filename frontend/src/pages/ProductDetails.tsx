import {
  Btn,
  Tabs,
  Rating,
  Reviews,
  Carousel,
  Questions,
  ProductQuantity,
} from "..";
import { useState } from "react";
import { useStore } from "../store";
import { arrowRight2 } from "../assets";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const isUser = localStorage.getItem("isUser");

  const {
    state: { products, cart },
    dispatch,
  } = useStore();
  const cartItem = cart.find(item => item.id === id);
  const product = cartItem ? cartItem : products.find(p => p.id === id);
  const featured = products.filter(item => item.specialOffer == "Featured");

  return (
    product && (
      <section>
        <div className="max-container">
          <div className="*:font-medium">
            <Link
              to="/"
              className="lg:text-lg text-[#151515] cursor-pointer hover:underline"
            >
              Store
            </Link>
            <span className="text-[#093459] text-xs"> &gt; </span>
            <span className="lg:text-lg text-[#151515]">Cart</span>
            <span className="text-[#093459] text-xs"> &gt; </span>
            <span className="text-[#EF0D04] lg:text-lg">Product Details</span>
          </div>
          <div className="lg:w-5/6 mx-auto py-12 flex max-md:flex-col justify-between items-start lg:gap-8 gap-6">
            <div className="w-full text-white font-medium relative">
              <img
                className="max-h-105 w-full rounded-lg object-cover shadow-sm"
                src={`/src/assets/images/${product.imagePath}`}
                alt={product.name}
              />
              <span
                className={`px-3 rounded-md py-0.5 text-base hover:bg-none absolute top-4 lg:top-8 left-4 lg:left-8 ${
                  product.specialOffer == "Featured" ? "btn_dark" : ""
                } ${product.specialOffer == "New" ? "btn_red" : ""} ${
                  product.specialOffer == "Trending" ? "btn_yellow" : ""
                }`}
              >
                {product.specialOffer}
              </span>
              {product.discountPrice > 0 && (
                <span className="mt-2 p-3 bg-[#38CB89] absolute top-8 lg:top-16 left-4 lg:left-8 tracking-wide font-inter rounded-md py-0 text-lg">
                  -{product.discountPrice}%
                </span>
              )}
            </div>
            <div className="w-full">
              <div className={`flex justify-between items-center py-2`}>
                <Rating rating={product.rating} />
                <p className="text-[#FAA613] text-sm font-medium">
                  {product.category == "men" && "Male"}{" "}
                  {product.category == "women" && "Female"}
                </p>
              </div>
              <h2 className="text-xl lg:text-2xl font-medium py-2 lg:py-4">
                {product.name}
              </h2>
              <p className="text-[#6C7275] max-md:hidden pb-4 lg:text-balance">
                {product.description
                  ? product.description
                  : "Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks."}
              </p>
              <p className="font-medium flex gap-3">
                <span className="lg:text-xl text-lg text-[#323231]">
                  <span className="line-through">N</span>
                  {product.discountPrice
                    ? (
                        product.price -
                        product.price * (product.discountPrice / 100)
                      ).toFixed(2)
                    : product.price}
                </span>
                {product.discountPrice > 0 && (
                  <span className="text-[#6C7275]/80 text-lg line-through">
                    N{product.discountPrice && product.price}
                  </span>
                )}
              </p>
              <div className="text-sm py-4">
                {product.trackNo && (
                  <div>
                    <span className="text-[#858585]">SKU: </span>
                    <span className="text-[#323231] font-medium">
                      {product.trackNo}
                    </span>
                  </div>
                )}
                {product.category && (
                  <div>
                    <span className="text-[#858585]">Category: </span>
                    <span className="text-[#323231] font-medium">
                      {product.category}
                    </span>
                  </div>
                )}
                {product.color && (
                  <div>
                    <span className="text-[#858585]">Color: </span>
                    <span className="text-[#323231] font-medium">
                      {product.color}
                    </span>
                  </div>
                )}
                {product.sizes && (
                  <div>
                    <span className="text-[#858585]">Size: </span>
                    <span className="text-[#323231] font-medium">
                      {product.sizes.join()}
                    </span>
                  </div>
                )}
                {product.quantity && (
                  <div>
                    <span className="text-[#858585]">Qty: </span>
                    <span className="text-[#323231] font-medium">
                      {product.quantity}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-center pt-4 gap-3 lg:gap-6">
                {cartItem && (
                  <div className="*:px-2 inline-block shadow-md rounded-sm py-2 px-4 *:cursor-pointer *:font-medium bg-[#F5F5F5]">
                    <ProductQuantity
                      item={{
                        cartId: cartItem.cartId,
                        cartQuantity: cartItem.cartQuantity,
                      }}
                    />
                  </div>
                )}
                {product.quantity ? (
                  <div className="w-full">
                    <Btn text="Checkout" to="/cart" rightIcon={arrowRight2} />
                  </div>
                ) : (
                  <div
                    className="w-full"
                    onClick={() =>
                      !isUser
                        ? navigate("/signup")
                        : dispatch({ type: "ADD_TO_CART", payload: product })
                    }
                  >
                    <Btn text="Add to Cart" to={`/product/${id}`} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white pb-10">
          <div className="max-container">
            <div className="md:w-5/6 mx-auto">
              <Tabs
                activeTab={activeTab}
                className="pt-10 pb-12"
                setActiveTab={setActiveTab}
                config={[
                  { header: "Reviews", component: <Reviews id={id!} /> },
                  { header: "Questions", component: <Questions /> },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <Carousel cards={featured} heading="Featured Items" />
        </div>
      </section>
    )
  );
};

export default ProductDetails;
