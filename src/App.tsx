import { BrowserRouter } from "react-router-dom"
import Router from "./router/Router"
import { Container } from "react-bootstrap"
import Layout from "./layouts/Layout"

function App() {

  return (
    <>
    <Container>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </Container>
    </>
  )
}

export default App
