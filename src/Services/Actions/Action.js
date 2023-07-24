import {ADD_TO_CART, REMOVE_FROM_CART} from "../Constants"
export const addToCart = (data)=>{
    // console.log("action",data)
    return {
        data: data,
        type: ADD_TO_CART
    }
}
export const removeFromCart = ()=>{
    // console.log("action",data)
    return {
        type: REMOVE_FROM_CART
    }
}
