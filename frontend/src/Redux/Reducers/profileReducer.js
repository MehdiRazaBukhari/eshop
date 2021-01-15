const profileReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case 'PROFILE_REQUESTED':
      return { loading: true }
    case 'PROFILE_SUCCESS':
      return { loading: false, profile: action.payload }
    case 'PROFILE_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export default profileReducer
