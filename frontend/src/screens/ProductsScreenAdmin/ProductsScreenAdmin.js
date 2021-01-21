import { Container, ListGroup, Table } from 'react-bootstrap'
import User from '../../components/User/User'
import { useSelector, useDispatch } from 'react-redux'
import getUsers from '../../Redux/Actions/getUsers'
import { useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading'
import Message from '../../components/Message/Message'
import getProductsList from '../../Redux/Actions/getProductsList'
import ProductListItem from '../../components/ProductListItem/ProductListItem'

const ProductsScreenAdmin = ({ history }) => {
  const productList = useSelector((state) => state.productList)
  const { loading, products, error, reset } = productList
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.loggedUser)
  const [isAdmin, setisAdmin] = useState(user.isAdmin)

  useEffect(() => {
    if (isAdmin && reset) {
      dispatch(getProductsList())
    }
  }, [dispatch, isAdmin, reset])

  useEffect(() => {
    if (!user || !user.token) {
      // dispatch shipping action for user being verified
      history.push('/login?redirect=admin/users')
    }
  }, [history, user])
  return (
    <>
      <Container className='mt-5'>
        {loading ? (
          <Loading />
        ) : !isAdmin ? (
          <Message variant='danger'>Not Admin!</Message>
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <h1>Products</h1>

            <Table striped bordered hover size='sm'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>PRICE ($)</th>
                  <th>CATEGORY</th>
                  <th>STOCK</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((product, i) => (
                    <ProductListItem
                      key={product._id}
                      id={product._id}
                      name={product.name}
                      price={product.price}
                      category={product.category}
                      countInStock={product.countInStock}
                    />
                  ))}
              </tbody>
            </Table>
          </>
        )}
      </Container>
    </>
  )
}

export default ProductsScreenAdmin
