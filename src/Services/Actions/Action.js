import {ADD_TO_CART, REMOVE_FROM_CART,ADD_DATA} from "../Constants"
export const addToCart = (data)=>{
    // console.log("action",data)
    return {
        data: data,
        type: ADD_TO_CART
    }
}
export const removeFromCart = ()=>{
    console.log("remove action")
    return {
        type: REMOVE_FROM_CART
    }
}
export const addDataToComp = (data)=>{
    return{
        data: data,
        type: ADD_DATA
    }
}
