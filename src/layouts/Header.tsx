import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useCartContext } from "../context/CartContext";

function Header() {
  const { cartQty, openCart, closeCart } = useCartContext();

  return (
    <NavbarBs className="bg-dark text-light mb-3">
        <Container className="w-100 d-flex align-items-center justify-content-betvin gap-3">
            <Nav className="d-flex align-items-center justify-content-center gap-3">
                <NavLink to="/" className="text-light">
                    Home
                </NavLink>
                <NavLink to="/shop" className="text-light">
                    Shop
                </NavLink>
                <NavLink to="/about" className="text-light">
                    About
                </NavLink>
            </Nav>
            <Button onClick={openCart} style={{ position: 'relative' }}>
                <i className="bi bi-cart"></i>
                <span 
                    className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                    style={{
                        color: 'white',
                        width: '1.2rem',
                        height: '1.2rem',
                        position: 'absolute',
                        fontSize: '1.2rem',
                        bottom: 0,
                        right: 0,
                        transform: 'translate(25%, 25%)',
                    }}
                >{cartQty}</span>
            </Button>
        </Container>
    </NavbarBs>
  )
}

export default Header