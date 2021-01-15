const logoutUser = () => async (dispatch) => {
  dispatch({ type: 'LOGOUT' })
  localStorage.removeItem('user')
}

export default logoutUser
