import { Container } from 'react-bootstrap'
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Container className='py-3'>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
