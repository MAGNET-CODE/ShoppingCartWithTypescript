import { Offcanvas, Stack } from "react-bootstrap";
import { useCartContext } from "../context/CartContext"
import CartItem from "../components/CartItem";
import productItems from '../data/products.json'


type cartProps = {
    isOpen: boolean
}

function Cart({ isOpen }: cartProps) {
    const { closeCart, cartItem } =useCartContext();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {
                    cartItem.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))
                }
                <div>
                    total: {''}
                    {cartItem.reduce((total, currentItem) => {
                        const product = productItems.find((item) => item.id === currentItem.id);
                        return total + (product?.price || 0) * currentItem.qty;
                    }, 0)}
                </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Cart