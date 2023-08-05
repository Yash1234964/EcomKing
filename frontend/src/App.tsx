/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navbar,Container,NavbarBrand,Nav,Row,Col } from 'react-bootstrap'
import { sampleProducts } from './data'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <div className='d-flex flex-column h-full vh-100'>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
          <NavbarBrand>Ecom King</NavbarBrand>
          </Container>
          <Nav>
            <a href='/cart' className="nav-link">Cart</a>
            <a href='/login' className="nav-link">Sign In</a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">

        <Outlet/>
            
          
        </Container>
      </main>
      <footer>
        <div className="text-center" >
          All Rights reserved
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
