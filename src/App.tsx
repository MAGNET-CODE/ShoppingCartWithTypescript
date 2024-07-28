import { BrowserRouter } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import { Container } from "react-bootstrap"

import Router from "./router/Router"
import Layout from "./layouts/Layout"

function App() {

  return (
    <CartProvider>
      <Container>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </Container>
    </CartProvider>
  )
}

export default App
