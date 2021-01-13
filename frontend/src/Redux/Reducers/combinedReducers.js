import { combineReducers } from 'redux'
import productListReducer from './productListReducer'
import productDetailReducer from './productDetailReducer'
import cartReducer from './CartReducer'

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
})

export default reducer
