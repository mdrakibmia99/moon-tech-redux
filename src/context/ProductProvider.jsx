import { createContext, useEffect, useState } from "react";

export const PRODUCT_CONTEXT = createContext();

// eslint-disable-next-line react/prop-types
const ProductProvider = ({children}) => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch('/products.json')
    .then(res=> res.json())
    .then(data => setData(data))
   },[])
 const value={data}
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
        {children}
      </PRODUCT_CONTEXT.Provider>
    );
};

export default ProductProvider;