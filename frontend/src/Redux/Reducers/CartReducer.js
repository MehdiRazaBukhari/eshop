// cart should be array of objects
const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = action.payload
      const exists = state.cartItems.find(
        (item) => item.product === newItem.product
      )

      if (exists) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product === newItem.product ? newItem : item
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        }
      }
    default:
      return state
  }
}

export default cartReducer
