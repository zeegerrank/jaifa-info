import React from "react";
import { Container, Navbar, Row, Col, Stack, Nav } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer>
      <Navbar className=" align-items-xxl-end" bg="primary" variant="dark">
        <Container>
          <Stack className="bg-danger">
            <Row>
              <Col className="text-center">Social Media</Col>
            </Row>
            <Row>
              <Col className="mb-0">Company</Col>
              <Col
                className="
              ">
                <Row className=" d-inline-block align-content-start row-cols-1">
                  <h6 className="col" style={{ textDecoration: "underline" }}>
                    ประเภทสินค้าฟาร์ม
                  </h6>
                  <p>
                    <a
                      className="col"
                      href="/products/salads"
                      style={{ textDecoration: "none", color: "#28252A" }}>
                      ผักสลัด
                    </a>
                  </p>
                  <p>
                    <a
                      className="col"
                      href="/products/vegetables"
                      style={{ textDecoration: "none", color: "#28252A" }}>
                      ผักอื่นๆ
                    </a>
                  </p>
                  <p>
                    <a
                      className="col"
                      href="/products/charcoal"
                      style={{ textDecoration: "none", color: "#28252A" }}>
                      ถ่ายไฟ และน้ำส้มควันไม้
                    </a>
                  </p>
                  <p>
                    <a
                      className="col"
                      href="/products/fertilizer"
                      style={{ textDecoration: "none", color: "#28252A" }}>
                      ปุ๋ย
                    </a>
                  </p>
                </Row>
              </Col>
              <Col>Contact</Col>
            </Row>
            <Row>
              <Col className="text-center">Designed by p-sek</Col>
            </Row>
          </Stack>
        </Container>
      </Navbar>
    </footer>
  );
};
