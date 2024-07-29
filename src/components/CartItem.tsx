import { Stack, Button } from 'react-bootstrap'

import { useCartContext } from '../context/CartContext'

import productItems from '../data/products.json'

type CartItemProps = {
  id: number
  qty: number
}

function CartItem({ id, qty }: CartItemProps) {
  const { removeItem } = useCartContext()

  const product = productItems.find((item) => item.id === id)

  if (product == null) return null

  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
      <img
        src={product.imgUrl}
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
      />
      <div className='me-auto text-dark'>
        <div>
          {product.title}{' '}
          {qty > 1 && (
            <span className='text-muted' style={{ fontSize: '.65rem' }}>
              qty: {qty}
            </span>
          )}
        </div>
        <div>price: {product.price * qty}</div>
        <Button
          variant='outline-dark'
          size='sm'
          onClick={() => removeItem(product.id)}
        >
          &times;
        </Button>
      </div>
    </Stack>
  )
}

export default CartItem
