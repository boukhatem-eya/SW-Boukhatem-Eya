import login from "./login"
import { combineReducers } from "redux"

const rootReducer = () =>{
 return combineReducers({
    login,
  })
}

export default rootReducer