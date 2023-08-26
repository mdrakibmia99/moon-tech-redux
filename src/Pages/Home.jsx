import { useContext } from "react";
import { PRODUCT_CONTEXT } from "../context/ProductProvider";

const Home = () => {
  const {data} = useContext(PRODUCT_CONTEXT);
  console.log(data)
  
    return (
        <div>
            <h1>This is home page</h1>
        </div>
    );
};

export default Home;