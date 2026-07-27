import { useSelector } from "react-redux";
import Card from "../components/Card";

const Products = () => {
  const products = useSelector((state) => state.products);
  return (
    <>
      <div className="flex flex-col md:flex-row w-full p-0 md:p-4 gap-5 h-full relative">
        <div className="productList grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-zinc-800 w-full rounded-xl gap-3 p-2 overflow-y-scroll scrollBar pb-10">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
