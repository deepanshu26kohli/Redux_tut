import {ADD_TO_CART} from "../Constants"
export const addToCart = (data)=>{
    // console.log("action",data)
    return {
        data: data,
        type: ADD_TO_CART
    }
}
