import { useEffect, useState } from 'react'
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap'
import FormContainer from '../../components/FormContainer/FormContainer'
import { useSelector, useDispatch } from 'react-redux'
import setPaymentMethod from '../../Redux/Actions/setPaymentMethod'
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps'
import CartItem from '../../components/CartItem/CartItem'
const PlaceOrder = ({ history }) => {
  const { user } = useSelector((state) => state.loggedUser)
  const { paymentMethod } = useSelector((state) => state.paymentMethod)
  const { cartItems } = useSelector((state) => state.cart)

  const { address, city, postalCode, country } = useSelector(
    (state) => state.shippingAddress
  )

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    // history.push('/placeorder')
  }

  useEffect(() => {
    if (!user || !user.token) {
      // dispatch shipping action for user being verified
      history.push('/login?redirect=shipping')
    }
  }, [history, user])
  return (
    <>
      {!user ? null : (
        <>
          <FormContainer>
            <CheckoutSteps one={false} two={false} three={false} four={false} />
          </FormContainer>

          <Container className='mt-5'>
            <Row>
              <Col sm={12} md={8}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h3>SHIPPING</h3>
                    <div className='ml-3'>
                      <p>{address}</p>
                      <p>
                        {city} {'-'}
                        {postalCode}
                      </p>
                      <p>{country}</p>
                    </div>
                  </ListGroup.Item>

                  <ListGroup.Item className='mt-2'>
                    <h3>Payment</h3>
                    <div className='ml-3'>{paymentMethod}</div>
                  </ListGroup.Item>

                  <ListGroup.Item className='mt-2'>
                    <h3>Order Items</h3>
                    <div className='ml-1 mt-4'>
                      {cartItems && cartItems.length ? (
                        <Row>
                          <Col sm={12} md={12} lg={12} xl={12}>
                            {cartItems.map((item) => (
                              <CartItem item={item} key={item.product} />
                            ))}
                          </Col>
                        </Row>
                      ) : (
                        <div>Cart Empty</div>
                      )}
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col>
                <ListGroup className='text-center'>
                  <ListGroup.Item>
                    <h3>Summary</h3>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Items</Col>
                      <Col>$6787</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping</Col>
                      <Col>$6787</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Tax</Col>
                      <Col>$6787</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item className='font-weight-bold'>
                    <Row>
                      <Col>Total</Col>
                      <Col>$6787</Col>
                    </Row>
                  </ListGroup.Item>

                  <Button variant='dark'>Place Order</Button>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  )
}

export default PlaceOrder
