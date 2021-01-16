import { combineReducers } from 'redux'
import productListReducer from './productListReducer'
import productDetailReducer from './productDetailReducer'
import cartReducer from './CartReducer'
import userLoginReducer from './userLoginReducer'
import registerUserReducer from './registerUser'
import profileReducer from './profileReducer'
import profileUpdateReducer from './profileUpdateReducer'
import ShippingReducer from './ShippingReducer'
import paymentMethod from './paymentMethodReducer'
const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  loggedUser: userLoginReducer,
  registration: registerUserReducer,
  profile: profileReducer,
  profile_update: profileUpdateReducer,
  shippingAddress: ShippingReducer,
  paymentMethod: paymentMethod,
})

export default reducer
