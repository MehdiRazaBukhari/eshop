import { combineReducers } from 'redux'
import productListReducer from './productListReducer'
import productDetailReducer from './productDetailReducer'
const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
})

export default reducer
