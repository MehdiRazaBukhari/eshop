import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../../components/Product/Product'
import { useDispatch, useSelector } from 'react-redux'
import getProductsList from '../../Redux/Actions/getProductsList'
import Loading from '../../components/Loading/Loading'
import Message from '../../components/Message/Message'
const HomeScreen = () => {
  const productList = useSelector((state) => state.productList)
  const { loading, products, error } = productList
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductsList())
  }, [dispatch])

  return (
    <>
      {loading ? (
        <div className='d-flex justify-content-center'>
          <Loading />
        </div>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <h1>Products</h1>

          <Row>
            {products.length
              ? products.map((product) => (
                  <Col
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    className='py-3'
                    key={product._id}
                  >
                    <Product product={product} />
                  </Col>
                ))
              : null}
          </Row>
        </>
      )}
    </>
  )
}

export default HomeScreen
