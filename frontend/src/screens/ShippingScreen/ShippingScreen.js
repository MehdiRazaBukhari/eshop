import { useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Loading from '../../components/Loading/Loading'
const ShippingScreen = ({ history }) => {
  const { user } = useSelector((state) => state.loggedUser)

  const handleAddress = () => {}
  const handleCity = () => {}
  const handlePostalCode = () => {}
  const handleCountry = () => {}
  const handleSubmit = () => {}

  useEffect(() => {
    if (!user || !user.token) {
      // dispatch shipping action for user being verified
      history.push('/login?redirect=shipping')
    }
  }, [history, user])
  return (
    <>
      {!user || !user.token ? (
        <Loading />
      ) : (
        <>
          <Row className='mt-5'>
            <Col sm={12} md={6} lg={6} xl={6}>
              <h2>SHIPPING</h2>
              <Form className='mt-4'>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type='address'
                    placeholder='Address'
                    onChange={handleAddress}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type='city'
                    placeholder='City'
                    onChange={handleCity}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control
                    type='postalCode'
                    placeholder='Postal Code'
                    onChange={handlePostalCode}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type='country'
                    placeholder='Country'
                    onChange={handleCountry}
                  />
                </Form.Group>

                <div className='d-flex justify-content-end'>
                  <Button variant='dark' onClick={handleSubmit}>
                    Continue
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default ShippingScreen
