import React from "react";import { Container, Navbar, Row, Col, Stack, Nav } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer>
      <Navbar className=" align-items-xxl-end" bg="primary" variant="dark">
        <Container>
          <Stack className="">
            <Row className="mt-2">
              <Col className="text-center">Social Media</Col>
            </Row>
            <span
              className="m-3 rounded-1 w-100"
              style={{ height: "3px", backgroundColor: "lightgray" }}
            />
            <Row className=" d-flex justify-content-around">
              <Col>
                <Row className="row-cols-1">
                  <h6 className="col" style={{ textDecoration: "underline" }}>
                    Company
                  </h6>
                  <p className=" col" style={{ textIndent: "30px" }}>
                    fringilla ut morbi tincidunt augue interdum velit euismod in
                    pellentesque massa placerat duis ultricies lacus sed turpis
                    tincidunt id aliquet risus feugiat in ante metus dictum at
                    tempor commodo ullamcorper a lacus vestibulum sed arcu non
                    odio euismod lacinia at quis risus sed vulputate odio ut
                    enim blandit volutpat maecenas
                  </p>
                </Row>
              </Col>
              <Col>
                <Row className="row-cols-1">
                  <h6 className="col" style={{ textDecoration: "underline" }}>
                    ประเภทสินค้าฟาร์ม
                  </h6>
                  <p className="col m-1">
                    <a
                      href="/products/salads"
                      style={{ textDecoration: "none", color: "#28252A" }}>
                      ผักสลัด
                    </a>
                  </p>
                  <p className="col m-1">
                    <a
                      href="/products/vegetables"
                      style={{ textDecoration: "none", color: "#28252A" }}>
                      ผักอื่นๆ
                    </a>
                  </p>
                  <p className="col m-1">
                    <a
                      href="/products/charcoal"
                      style={{ textDecoration: "none", color: "#28252A" }}>
                      ถ่ายไฟ และน้ำส้มควันไม้
                    </a>
                  </p>
                  <p className="col m-1">
                    <a
                      href="/products/fertilizer"
                      style={{ textDecoration: "none", color: "#28252A" }}>
                      ปุ๋ย
                    </a>
                  </p>
                </Row>
              </Col>
              <Col>Contact</Col>
            </Row>
            <span
              className="m-3 rounded-1 w-100"
              style={{ height: "3px", backgroundColor: "lightgray" }}
            />
            <Row className="mb-2">
              <Col className="text-center">Designed by p-sek</Col>
            </Row>
          </Stack>
        </Container>
      </Navbar>
    </footer>
  );
};
