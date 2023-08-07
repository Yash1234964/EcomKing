/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navbar,Container,NavbarBrand,Nav,Row,Col, Button } from 'react-bootstrap'
import { sampleProducts } from './data'
import { Outlet } from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { Store } from './store';

function App() {

  const {state:{mode} , dispatch} = useContext(Store);

  useEffect(() => {
     document.body.setAttribute('data-bs-theme',mode)
  },[mode])

  const switchModeHandler = () => {
    dispatch({type:'SWITCH_MODE'})
  }

  return (
    <>
    <div className='d-flex flex-column h-full vh-100'>
      <header>
        <Navbar  expand="lg">
          <Container>
          <NavbarBrand>Ecom King</NavbarBrand>
          </Container>
          <Nav>
            <Button variant={mode} onClick = {switchModeHandler} >
              <i className={mode=== 'light'?'fa fa-sun' : 'fa fa-moon'} > </i>
            </Button>
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
