import { useContext } from "react";
import { PRODUCT_CONTEXT } from "../context/ProductProvider";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const {
    state:{loading,error,products},
} = useContext(PRODUCT_CONTEXT);
console.log(products,'show proiduct')
  console.log(products,'asd')
let content;
if(loading){
  return <h2>Loading</h2>
}

if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!loading && !error && products.length === 0) {
    content = <p>Nothing to show, product list is empty</p>;
  }

  if (!loading && !error && products?.length) {
    content = products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ));
    
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default Home;