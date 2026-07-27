import { useSelector } from "react-redux";
import Card from "../components/Card";

const Home = () => {
  const products = useSelector((state) => state.products);
  const wishListItems = useSelector((state) => state.wishList);

  const wishlistedProducts = products.filter((product) =>
    wishListItems.includes(product.id),
  );

  return (
    <div className="flex flex-col w-full h-full overflow-y-auto scrollBar p-4 gap-8">
      <div className="hero-section flex flex-col gap-4 bg-zinc-800 p-6 rounded-2xl border border-primary/30 shadow-lg">
        <h1 className="text-3xl font-bold text-primary">Your Wishlist</h1>
        <p className="text-zinc-300">Products you've saved for later.</p>
        {wishlistedProducts.length > 0 ? (
          <div className="flex gap-4 overflow-x-auto scrollBar pb-4">
            {wishlistedProducts.map((product) => (
              <div
                key={product.id}
                className="min-w-[280px] max-w-[300px] flex-shrink-0"
              >
                <Card product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-zinc-800 p-6 rounded-xl flex justify-center">
            <p className="text-zinc-400">
              Your wishlist is empty. Explore products below and add some!
            </p>
          </div>
        )}
      </div>

      <div className="products-section flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-primary">All Products</h2>
        <div className="productList grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-zinc-800 w-full rounded-xl gap-3 p-4 pb-10">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
