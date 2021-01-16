const ShippingReducer = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return { loggedIn: true }

    default:
      return state
  }
}

export default ShippingReducer
