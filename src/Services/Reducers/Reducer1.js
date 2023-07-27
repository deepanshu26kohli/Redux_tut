import { ADD_DATA } from "../Constants"

export function compData(myState=null,action){
    switch (action.type){
        case ADD_DATA:
           return action.data
    default:
        return myState
    }
}
export default { compData}