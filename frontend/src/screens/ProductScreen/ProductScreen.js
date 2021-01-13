import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Row, Image, ListGroup, Form } from 'react-bootstrap'
import Rating from '../../components/Rating/Rating'
import styles from './productScreen.module.css'
import getProductDetail from '../../Redux/Actions/getProductDetail'
import { useDispatch, useSelector } from 'react-redux'
import addToCart from '../../Redux/Actions/addToCart'
const ProductScreen = ({ match }) => {
  const productDetail = useSelector((state) => state.productDetail)
  const { loading, product, error } = productDetail
  const dispatch = useDispatch()
  const [qty, setQty] = useState(1)
  useEffect(() => {
    dispatch(getProductDetail(match.params.id))
  }, [match, dispatch])

  return (
    <>
      <Link to='/'>
        <Button variant='light' className={styles.backButton}>
          Go Back
        </Button>
      </Link>
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <Row>
          <Col sm={12} md={6} lg={6} xl={6}>
            <Image src={product.image} alt={product.name} fluid></Image>
          </Col>

          <Col sm={12} md={4} lg={3} xl={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h4>{product.name}</h4>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col sm={12} md={2} lg={3} xl={3}>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>${product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Quantity:</Col>
                  <Col>
                    <Form.Control
                      as='select'
                      onChange={(e) => {
                        setQty(e.target.value)
                      }}
                    >
                      {[...Array(product.countInStock)].map((e, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Link
                  to={`/cart/${product._id}?qty=${qty}`}
                  // onClick={() => console.log('sss')}
                >
                  <Button
                    className='btn-block'
                    disabled={product.countInStock === 0}
                    onClick={() => dispatch(addToCart(product._id, qty))}
                  >
                    ADD TO CART
                  </Button>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  )
}

export default ProductScreen
