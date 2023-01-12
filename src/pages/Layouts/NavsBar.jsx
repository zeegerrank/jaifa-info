import { React, useEffect } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

const NavsBar = () => {
  const trackPage = () => {
    for (let i = 0; i < document.links.length; i++) {
      if (
        document.links[i].href === document.URL &&
        document.links[i].className === "dropdown-item"
      ) {
        let currentLink = document.links[i];
        currentLink.className = "dropdown-item active";
      }
    }
  };

  useEffect(() => {
    trackPage();
  }, []);

  return (
    <div>
      {/* NavsBar */}
      <Navbar
        onClick={trackPage}
        className="mb-3"
        bg="primary"
        variant="dark"
        expand="md">
        <Container>
          <Navbar.Brand href="/">JAIFA FARM</Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end">
            <Nav className="">
              <Nav.Link href="/">Home</Nav.Link>
              {/* Farm Products Dropdown */}
              <Nav>
                <NavDropdown
                  id="farm-products"
                  title="สินค้าฟาร์ม"
                  menuVariant="transparent">
                  <NavDropdown.Item
                    className={
                      document.links.href === document.URL ? "active" : ""
                    }
                    href="/products/salads">
                    ผักสลัด
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/products/vegetables">
                    ผักอื่นๆ
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/products/charcoal">
                    ถ่านไฟ และน้ำส้มควันไม้
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/products/fertilizer">
                    ปุ๋ย
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/products">ทั้งหมด</NavDropdown.Item>
                </NavDropdown>
              </Nav>

              {/* Stories Dropdown Future plan*/}

              {/* <Nav>
                <NavDropdown
                  id="stories"
                  title="Stories"
                  menuVariant="transparent">
                  <NavDropdown.Item href="/stories/vegetables">
                    ผัก
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/stories/charcoal">
                    ถ่านไฟ และ น้ำส้มควันไม้
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/stories/fertilizer">
                    ปุ๋ย
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav> */}

              {/* <Nav.Link href="/academy">Academy</Nav.Link> */}
              <Nav.Link disabled href="/about-us">
                About Us
              </Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavsBar;
