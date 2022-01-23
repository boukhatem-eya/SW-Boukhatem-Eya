import * as types from "../types"

const initialState = {
  selectedUser: {},
  loading: false,
  errors: false,
  isAuthenticated: false,
  list: [
  ],
}

const login = (state = initialState, action) => {
  switch (action.type) {
    
    case types.LOGIN_REQUEST:
      return { ...state, loading: true, errors: true, isAuthenticated: false }
    case types.LOGIN_SUCCESS:
      return { ...state, selectedUser: action.user, loading: false, errors: false, isAuthenticated: true }
    case types.LOGIN_FAIL:
      return { ...state, loading: false, errors: true, isAuthenticated: false }
  
default:
      return state
  }
}
export default login
