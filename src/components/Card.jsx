import { useDispatch, useSelector } from "react-redux";
import { Heart, Star, StarHalf } from "lucide-react";
import { addItemToCart } from "../store/slices/cartSlice";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../store/slices/wishListSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const wishListItems = useSelector((state) => state.wishList);

  const isWishlisted = wishListItems.find((item) => item === product.id);

  return (
    <div className="product flex flex-col gap-3 p-3 rounded-xl bg-zinc-700 w-full">
      <div className="image w-full bg-zinc-50 rounded-md relative">
        <div
          className="w-8 h-8 rounded-full absolute top-2 right-3 bg-zinc-800 flex justify-center items-center cursor-pointer border border-zinc-600"
          onClick={() => {
            isWishlisted
              ? dispatch(removeItemFromWishlist(product.id))
              : dispatch(addItemToWishlist(product.id));
          }}
        >
          <Heart
            fill={isWishlisted ? "red" : "none"}
            color={isWishlisted ? "red" : "white"}
            size={16}
          />
        </div>
        <img
          className="h-48 w-full object-contain"
          src={product.image}
          alt="product"
        />
      </div>
      <div className="info flex flex-col flex-1">
        <h1 className="name text-lg text-white font-semibold line-clamp-1">
          {product.title}
        </h1>
        <p className="text-sm font-extralight description text-zinc-300 line-clamp-3">
          {product.description}
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <h1 className="price text-xl font-semibold text-zinc-100">
              {product.rating.rate}
            </h1>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: Math.floor(product.rating.rate) }).map(
                (_, index) => (
                  <Star
                    key={`full-${index}`}
                    fill="var(--color-primary)"
                    color="var(--color-primary)"
                    size={16}
                  />
                )
              )}
              {product.rating.rate % 1 >= 0.5 && (
                <StarHalf
                  fill="var(--color-primary)"
                  color="var(--color-primary)"
                  size={16}
                />
              )}
              {Array.from({ length: 5 - Math.ceil(product.rating.rate) }).map(
                (_, index) => (
                  <Star key={`empty-${index}`} color="gray" size={16} />
                )
              )}
            </div>
          </div>
          <h1 className="price text-xl font-semibold text-primary">
            ₹{product.price}
          </h1>
        </div>
        <button
          className={`bg-primary hover:bg-primary/80 px-3 py-2 text-sm rounded-lg w-full text-white font-medium transition-colors`}
          onClick={() => dispatch(addItemToCart(product))}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default Card;
