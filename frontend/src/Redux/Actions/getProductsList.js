import axios from 'axios'

const getProductsList = () => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_LIST_REQUEST' })
    const response = await axios.get('http://localhost:55555/products')

    dispatch({ type: 'PRODUCT_LIST_SUCCESS', payload: response.data.products })
  } catch (error) {
    dispatch({ type: 'PRODUCT_LIST_FAIL', payload: error })
  }
}

export default getProductsList
