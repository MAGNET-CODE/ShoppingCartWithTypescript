import { BrowserRouter } from "react-router-dom"
import Router from "./router/Router"
import { Container } from "react-bootstrap"

function App() {

  return (
    <>
    <Container>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Container>
    </>
  )
}

export default App
