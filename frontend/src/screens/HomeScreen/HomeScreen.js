import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
// import products from '../../products'
import Product from '../../components/Product/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let response = []
      try {
        response = await axios.get('http://localhost:55555')
        setProducts(response.data.products)
      } catch (error) {
        console.log(error)
      }
      return response
    }

    fetchData()
  }, [])

  return (
    <>
      <h1>Products</h1>
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
    </>
  )
}

export default HomeScreen
