import React from 'react'
import { Col, Row } from 'react-bootstrap'
import products from '../../products'
import Product from '../../components/Product/Product'

const HomeScreen = () => {
  return (
    <>
      <h1>Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={2} md={6} lg={4} xl={3} className='py-3'>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen