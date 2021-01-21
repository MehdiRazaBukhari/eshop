import { Button, Col, Container, ListGroup, Row, Table } from 'react-bootstrap'
import User from '../../components/User/User'
import { useSelector, useDispatch } from 'react-redux'
import getUsers from '../../Redux/Actions/getUsers'
import { useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading'
import Message from '../../components/Message/Message'
import getProductsList from '../../Redux/Actions/getProductsList'
import ProductListItem from '../../components/ProductListItem/ProductListItem'
import { Link } from 'react-router-dom'

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
            <Row>
              <Col xs={12} sm={12} md={9} lg={9} xl={9}>
                <h1>Products</h1>
              </Col>
              <Col xs={12} sm={12} md={3} lg={3} xl={3} className='text-right'>
                <Link to='/admin/products/add'>
                  <Button variant='dark'>Add New Product</Button>
                </Link>
              </Col>
            </Row>
            <Table striped bordered hover size='sm' className='mt-3'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>PRICE ($)</th>
                  <th>CATEGORY</th>
                  <th>STOCK</th>
                  <th></th>
                  <th></th>
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
