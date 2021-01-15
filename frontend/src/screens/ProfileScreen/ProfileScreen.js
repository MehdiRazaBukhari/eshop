import Loading from '../../components/Loading/Loading'
import Message from '../../components/Message/Message'
import { useEffect, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import getProfile from '../../Redux/Actions/getProfile'
const ProfileScreen = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const { loading, profile, error } = useSelector((state) => state.profile)
  const { user } = useSelector((state) => state.loggedUser)
  const dispatch = useDispatch()
  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setPasswordError('Password fields must match!')
    } else {
      setPasswordError('')
    }
  }

  useEffect(() => {
    if (profile) {
      setName(profile.name)
      setEmail(profile.email)
    }
  }, [profile])

  useEffect(() => {
    if (user && user.token) {
      dispatch(getProfile(user.token))
    } else {
      history.push('/login?redirect=profile')
    }
  }, [history, user, dispatch])
  return (
    <>
      <Row className='mt-5'>
        <Col sm={12} md={5} l={5} xl={5}>
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant='warning'>{error}</Message>
          ) : (
            <>
              {passwordError.length ? (
                <Message variant='warning'>{passwordError}</Message>
              ) : null}
              <Form>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='name'
                    as='input'
                    value={name}
                    onChange={handleName}
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    as='input'
                    value={email}
                    onChange={handleEmail}
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    as='input'
                    value={password}
                    onChange={handlePassword}
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type='password'
                    as='input'
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                  ></Form.Control>
                </Form.Group>

                <div className='text-right'>
                  <Button type='submit' onClick={handleSubmit}>
                    Update
                  </Button>
                </div>
              </Form>
            </>
          )}
        </Col>
      </Row>
    </>
  )
}

export default ProfileScreen
