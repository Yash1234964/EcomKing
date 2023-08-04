/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navbar,Container,NavbarBrand,Nav,Row,Col } from 'react-bootstrap'
import { sampleProducts } from './data'

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

        <Row>

             {
              sampleProducts.map((product) => {
                return (
                <Col key={product.slug} sm={6} md={4} lg={3}>
                  <img src={product.image} alt={product.name} className="product-image"></img>
                    <h2>{product.name}</h2>
                    <p>₹{product.price}</p>
                </Col>)
              })
            }
        </Row>
            
          
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
