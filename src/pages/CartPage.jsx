import { useDispatch, useSelector } from "react-redux";
import cartLogo from "../assets/Shopping-removebg-preview.png";
import { Trash2, Star, StarHalf } from "lucide-react";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  emptyCart,
  removeItemFromCart,
} from "../store/slices/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartItems);

  return (
    <div className="flex flex-col bg-zinc-800 w-full gap-4 p-4 rounded-b-none  flex-1 transition-all duration-700 ease-in-out">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-primary">Cart Products</h1>
        </div>
        <button
          className={`${
            cartProducts.length > 0 ? "block" : "hidden"
          } bg-primary  rounded-md hover:bg-primary/80 px-3 py-1 text-white`}
          onClick={() => dispatch(emptyCart())}
        >
          Empty Cart
        </button>
      </div>
      <hr className="border-zinc-700" />
      <div className="flex flex-col flex-1 gap-3 overflow-auto scrollBar pr-2">
        <div
          className={`${
            cartProducts.length > 0 ? "hidden" : "block"
          } m-auto flex flex-col items-center`}
        >
          <img className="w-44 h-44 opacity-50" src={cartLogo} alt="" />
          <h1 className={`text-xl font-bold text-zinc-400 mt-4`}>
            Add Products
          </h1>
        </div>
        {cartProducts.map((product) => {
          return (
            <div
              key={product.id}
              className="product_card flex gap-3 md:gap-6 p-3 items-center bg-zinc-700 rounded-lg "
            >
              <div className="img h-24 w-24 rounded-xl bg-white overflow-hidden flex-shrink-0 p-1">
                <img
                  className="object-contain w-full h-full"
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="card_info flex flex-col gap-2 bg-zinc-700 rounded-xl flex-1">
                <h1 className="card_name text-xl line-clamp-1 select-none max-w-40 md:max-w-80 text-white">
                  {product.title}
                </h1>
                <div className="flex gap-2">
                  <h1 className="price text-xl font-semibold text-zinc-100">
                    {product.rating.rate}
                  </h1>
                  <div className="flex items-center gap-0.5">
                    {Array.from({
                      length: Math.floor(product.rating.rate),
                    }).map((_, index) => (
                      <Star
                        key={`full-${index}`}
                        fill="var(--color-primary)"
                        color="var(--color-primary)"
                        size={16}
                      />
                    ))}
                    {product.rating.rate % 1 >= 0.5 && (
                      <StarHalf
                        fill="var(--color-primary)"
                        color="var(--color-primary)"
                        size={16}
                      />
                    )}
                    {Array.from({
                      length: 5 - Math.ceil(product.rating.rate),
                    }).map((_, index) => (
                      <Star key={`empty-${index}`} color="gray" size={16} />
                    ))}
                  </div>
                </div>
                <div className="flex gap-7 items-center mt-auto">
                  <p className="card_price text-2xl  md:text-2xl text-primary select-none flex gap-1">
                    <span>₹</span>
                    <span>{product.price}</span>
                  </p>
                  <div className="add grid grid-flow-col w-24 text-center content-center items-center gap-1">
                    <button
                      className=" bg-primary rounded-md hover:bg-primary/80 text-white p-1"
                      onClick={() => {
                        product.quantity === 1
                          ? dispatch(removeItemFromCart(product.id))
                          : dispatch(decreaseItemQuantity({ id: product.id }));
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M5 11V13H19V11H5Z"></path>
                      </svg>
                    </button>
                    <h1 className="select-none text-white font-medium">
                      {product.quantity}
                    </h1>
                    <button
                      className=" bg-primary rounded-md hover:bg-primary/80 text-white p-1"
                      onClick={() =>
                        dispatch(increaseItemQuantity({ id: product.id }))
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex ">
                <button
                  className="bg-red-500 rounded-md hover:bg-red-600 flex items-center p-2 text-white transition-colors"
                  onClick={() => dispatch(removeItemFromCart(product.id))}
                >
                  <Trash2 size={24} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`
                      ${
                        cartProducts.length > 0
                          ? "justify-between"
                          : "justify-end"
                      } flex border-t border-zinc-700 pt-4 items-center`}
      >
        <button
          className={`${
            cartProducts.length > 0 ? "block" : "hidden"
          } bg-primary  rounded-md hover:bg-primary/80 px-4 py-2 text-white font-semibold`}
        >
          Checkout
        </button>
        <div
          className={`${
            cartProducts.length > 0 ? "flex" : "hidden"
          } gap-2 items-center`}
        >
          <h1 className="text-2xl font-semibold py-1 text-white">
            Total Price :{" "}
          </h1>

          <h1 className="text-2xl font-bold text-primary">
            ₹{cartProducts
              .reduce(
                (TotalPrice, currentItem) =>
                  TotalPrice + currentItem.price * currentItem.quantity,
                0,
              )
              .toFixed(2)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
