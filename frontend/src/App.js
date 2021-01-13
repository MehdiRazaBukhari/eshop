import { Container } from 'react-bootstrap'
import './App.css'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import ProductScreen from './screens/ProductScreen/ProductScreen'
import CartScreen from './screens/CartScreen/CartScreen'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className='py-3'>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/login' component={LoginScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
