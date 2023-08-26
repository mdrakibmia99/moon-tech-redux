import { createContext, useEffect, useReducer } from "react";
import ProductReducer, { initialState } from "../state/ProductReducer";
import { actionTypes } from "../state/actionTypes";



// eslint-disable-next-line react/prop-types
// const ProductProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(ProductReducer, initialState);
//   console.log(state,'sate');
//   useEffect(() => {
//     dispatch({ type: actionTypes.FETCHING_START })
//     fetch('/products.json')
//       .then(res => res.json())
//       .then((data) =>
//         dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data})
//       )
//       .catch(() => {
//         dispatch({ type: actionTypes.FETCHING_ERROR })
//       })
//   }, [])
//   const value = { state, dispatch }
//   return (
//     <PRODUCT_CONTEXT.Provider value={value}>
//       {children}
//     </PRODUCT_CONTEXT.Provider>
//   );
// };

export const  PRODUCT_CONTEXT= createContext();
const ProductProvider = ({ children }) => {
  const [state,dispatch]=useReducer(ProductReducer,initialState)
  console.log(state);
  useEffect(()=>{
    dispatch({type:actionTypes.FETCHING_START});
    fetch("/products.json")
    .then(res=> res.json())
    .then(data=> dispatch({type:actionTypes.FETCHING_SUCCESS,payload:data}))
    .catch(()=>{
      dispatch({type:actionTypes.FETCHING_ERROR})
    })

  },[])

  const value = {
    state, dispatch
  }
  return(
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  )
  
};

export default ProductProvider;