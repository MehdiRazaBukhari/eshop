import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../../components/Product/Product'
import { useDispatch, useSelector } from 'react-redux'
import getProductsList from '../../Redux/Actions/getProductsList'
const HomeScreen = () => {
  const productList = useSelector((state) => state.productList)
  const { loading, products, error } = productList
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductsList())
  }, [dispatch])

  return (
    <>
      <h1>Products</h1>
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <Row>
          {products.length
            ? products.map((product) => (
                <Col
                  sm={2}
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
      )}
    </>
  )
}

export default HomeScreen
