import { ADD_TO_CART, REMOVE_FROM_CART,ADD_DATA } from "../Constants"
// const initialState = {
//     cardData: []
// }
 export  function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("reudcer",action)
            return [
                ...state, { cardData: action.data }
            ]
           
        case REMOVE_FROM_CART:
            console.log("reudcer remove st",state)
          
            // state.pop()
            console.log(state,"remove state")
            return state.slice(0,state.length-1)          
        default:
            return state
    }
}
export function compData(myState=null,action){
    switch (action.type){
        case ADD_DATA:
           return action.data
    default:
        return myState
    }
}
export default {cardItems , compData}