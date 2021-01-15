import { combineReducers } from 'redux'
import productListReducer from './productListReducer'
import productDetailReducer from './productDetailReducer'
import cartReducer from './CartReducer'
import userLoginReducer from './userLoginReducer'
import registerUserReducer from './registerUser'

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  loggedUser: userLoginReducer,
  registration: registerUserReducer,
})

export default reducer
