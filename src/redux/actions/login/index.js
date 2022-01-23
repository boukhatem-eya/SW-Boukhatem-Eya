import * as types from "../../types"
import * as api from "../../../service/user.service"


export const fetchUser = (email, pwd) => async (dispatch) => {
    dispatch({
        type: types.LOGIN_REQUEST,
        
      })
         try {
           const user = await api.login(email, pwd)
            dispatch({
              type: types.LOGIN_SUCCESS,
              user,
            })
         } catch (e) {
          dispatch({
            type: types.LOGIN_FAIL,
          })
         }
}

export const logout = () => dispatch => {
    dispatch({
        type: types.LOGOUT
    })
}






