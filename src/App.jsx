import { Nav, Navbar, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TestProduct from "./pages/TestProduct";

function App() {
  return (
    <>
      {/* NavsBar */}
      <Navbar className="mb-3" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/vegetables">Vegetables</Nav.Link>
            <Nav.Link href="/academy">Academy</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* App Routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element="" />
          <Route path="/vegetables" element={<TestProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
