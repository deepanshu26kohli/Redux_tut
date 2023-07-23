import {ADD_TO_CART} from "../Constants"
const initialState = {
    cardData : []
}
export default function cardItems(state=[],action){
      switch(action.type){
        case ADD_TO_CART:
            // console.log("reudcer",action)
            return[
                ...state,{cardData: action.data}
            ]
        default :
        return state
      }
}
