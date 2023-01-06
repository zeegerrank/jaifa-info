import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import TestProduct from "./pages/Products/IwateCharcoal";

function App() {
  return (
    <>
      {/* NavsBar */}
      <Navbar className="mb-3" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">JAIFA SOCIAL ENTERPRISE</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            {/* Farm Products Dropdown */}
            <Navbar.Collapse id="farm-products">
              <Nav>
                <NavDropdown
                  id="farm-products"
                  title="Farm Products"
                  menuVariant="transparent">
                  <NavDropdown.Item href="/products/vegetables">
                    Vegetables
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/products/charcoal">
                    Iwate Charcoal & Wood Vinegar
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/products/fertilizer">
                    Fertilizer
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            {/* Stories Dropdown */}
            <Navbar.Collapse id="stories">
              <Nav>
                <NavDropdown
                  id="stories"
                  title="Stories"
                  menuVariant="transparent">
                  <NavDropdown.Item href="/stories/vegetables">
                    Vegetables
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/stories/vegetables">
                    Iwate Charcoal & Wood Vinegar
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/stories/vegetables">
                    Fertilizer
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Nav.Link href="/academy">Academy</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* App Routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element="" />
          <Route path="/products/vegetables" element={<TestProduct />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
      {/* Footer here */}
    </>
  );
}

export default App;
