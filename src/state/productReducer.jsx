import { actionTypes } from "./actionTypes";

export const initialState = {
    loading: false,
    products: [],
    error: false,
    cart: [],
    wishlist: [],
};
const ProductReducer = (state, action) => {
    console.log(action.payload,"nam ki pay")
    switch (action.type) {
        case actionTypes.FETCHING_START:
            return {
                ...state, loading: true, error: false,

            };
        case actionTypes.FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                products: action.payload,
            };
            case actionTypes.FETCHING_ERROR:
                return {
                    ...state,loading:false,error:true,
                };
                case actionTypes.ADD_TO_CART:
                    return {
                        ...state,
                        cart:[...state.cart,action.payload]
                    };
                case actionTypes.REMOVE_FROM_CART:
                    return {

                        ...state,
                        cart:state.cart.filter(item => item.model != action.payload.model)
                    };
                    default:
                        return state
    }

};

export default ProductReducer;