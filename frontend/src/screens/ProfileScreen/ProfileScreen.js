import Loading from '../../components/Loading/Loading'
import Message from '../../components/Message/Message'
import { useEffect, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import getProfile from '../../Redux/Actions/getProfile'
import updateUserProfile from '../../Redux/Actions/updateUserProfile'

const ProfileScreen = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const { loading, profile, error } = useSelector((state) => state.profile)
  const { update_loading, update_success, update_error } = useSelector(
    (state) => state.profile_update
  )

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

      if (user && user.token) {
        let newData
        if (name.length && email.length && password.length) {
          newData = { name, email, password }
        } else if (name.length && email.length) {
          newData = { name, email }
        } else if (name.length && password.length) {
          newData = { name, password }
        } else if (email.length && password.length) {
          newData = { email, password }
        } else if (name.length) {
          newData = { name }
        } else if (email.length) {
          newData = { email }
        } else if (password.length) {
          newData(password)
        }

        dispatch(updateUserProfile(user.token, newData))
      } else {
        history.push('/login?redirect=profile')
      }
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
              {update_success ? (
                <Message variant='success'>Profile updated successfuly</Message>
              ) : null}
              {update_loading ? <Loading type='ThreeDots' height='20' /> : null}
              {update_error ? <Message>{update_error}</Message> : null}
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
