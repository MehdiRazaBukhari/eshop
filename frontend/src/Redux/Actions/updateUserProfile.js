import axios from 'axios'

const updateUserProfile = (token, data) => async (dispatch) => {
  dispatch({ type: 'PROFILE_UPDATE_REQUEST' })
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    await axios.post('http://localhost:55555/users/updateProfile', data, config)
    dispatch({ type: 'PROFILE_UPDATE_SUCCESS' })
  } catch (error) {
    dispatch({
      type: 'PROFILE_UPDATE_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export default updateUserProfile
