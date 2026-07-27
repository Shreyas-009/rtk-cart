import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const items = useSelector((state) => state.cartItems);

  return (
    <div className="h-[64px] flex p-4 bg-zinc-800 z-50 w-full justify-between items-center shadow-md">
      <div className=" flex gap-4">
        <button
          className={`bg-primary text-white rounded-md hover:bg-primary/80 px-4 py-2 font-medium transition-colors`}
        >
          <Link to="/">Home</Link>
        </button>
        <button
          className={`bg-primary text-white rounded-md hover:bg-primary/80 px-4 py-2 font-medium transition-colors`}
        >
          <Link to="/products">Products</Link>
        </button>
      </div>
      <button
        className={`bg-primary rounded-md hover:bg-primary/80 px-4 py-2 relative transition-colors`}
      >
        <Link to="/cart" className="flex items-center">
          <div className="absolute -top-2 -right-2 font-bold bg-white text-primary p-0.5 rounded-full min-w-[20px] text-xs text-center border-2 border-zinc-800">
            {items.reduce(
              (totalProductCount, product) =>
                totalProductCount + product.quantity,
              0,
            )}
          </div>
          <ShoppingCart size={24} color="white" />
        </Link>
      </button>
    </div>
  );
};

export default Navbar;
