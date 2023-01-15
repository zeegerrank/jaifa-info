import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import React from "react";
import { Container, Navbar, Row, Col, Stack, Nav } from "react-bootstrap";

export const Footer = () => {
  return (
    <Navbar
      className="align-items-xxl-end "
      bg="primary"
      variant="dark"
      style={{ backgroundColor: "#75D9FD" }}>
      <Container>
        <Stack className="">
          <Container>
            <Row className="mt-2 justify-content-around justify-content-lg-center">
              <Col xs={2} className="text-center ">
                <a href="https://lin.ee/zrShn6r">
                  <i
                    style={{ color: "#13F21B" }}
                    class="fa-3x fa-brands fa-line"></i>
                </a>
              </Col>
              <Col xs={2} className="text-center ">
                <a href="https://www.facebook.com/jaifafarm">
                  <i
                    style={{ color: "#0914D6" }}
                    class=" fa-3x fa-brands fa-facebook"></i>
                </a>
              </Col>
              <Col xs={2} className="text-center ">
                <a href="https://m.me/1731864903746911">
                  <i
                    style={{ color: "#15E8C8" }}
                    class=" fa-3x fa-brands fa-facebook-messenger"></i>
                </a>
              </Col>
            </Row>
          </Container>
          <span
            className="my-3 rounded-1 w-100"
            style={{ height: "5px", backgroundColor: "#5D8CE2" }}
          />
          <Row className="row-cols-1 row-cols-lg-3">
            <Col className="text-center">
              <Row className="row-cols-1 ">
                <h6 className="col" style={{ textDecoration: "underline" }}>
                  Company
                </h6>
                <p className="col " style={{ textIndent: "30px" }}>
                  fringilla ut morbi tincidunt augue interdum velit euismod in
                  pellentesque massa placerat duis ultricies lacus sed turpis
                  tincidunt id aliquet risus feugiat in ante metus dictum at
                  tempor commodo ullamcorper a lacus vestibulum sed arcu non
                  odio euismod lacinia at quis risus sed vulputate odio ut enim
                  blandit volutpat maecenas
                </p>
              </Row>
            </Col>
            <span
              className="col d-lg-none d-block my-3 mx-auto rounded-2 w-75 "
              style={{ height: "2px", backgroundColor: "#5D8CE2" }}
            />
            <Col className="text-center">
              <Row className="row-cols-1">
                <h6 className="col " style={{ textDecoration: "underline" }}>
                  ประเภทสินค้าฟาร์ม
                </h6>
                <p className="col my-1">
                  <a
                    href="/products/salads"
                    style={{ textDecoration: "none", color: "#28252A" }}>
                    ผักสลัด
                  </a>
                </p>
                <p className="col my-1">
                  <a
                    href="/products/vegetables"
                    style={{ textDecoration: "none", color: "#28252A" }}>
                    ผักอื่นๆ
                  </a>
                </p>
                <p className="col my-1">
                  <a
                    href="/products/charcoal"
                    style={{ textDecoration: "none", color: "#28252A" }}>
                    ถ่านไฟ และน้ำส้มควันไม้
                  </a>
                </p>
                <p className="col my-1">
                  <a
                    href="/products/fertilizer"
                    style={{ textDecoration: "none", color: "#28252A" }}>
                    ปุ๋ย
                  </a>
                </p>
              </Row>
            </Col>
            <span
              className="col d-lg-none d-block my-3 mx-auto rounded-2 w-75 "
              style={{ height: "2px", backgroundColor: "#5D8CE2" }}
            />
            <Col>
              <h6
                className="text-center mb-3"
                style={{ textDecoration: "underline" }}>
                Contact
              </h6>
              <div className="text-center text-lg-start mx-lg-4">
                <p>
                  <a
                    style={{ color: "#28252A", textDecoration: "none" }}
                    href="https://goo.gl/maps/wFSrUUAazohmPBj6A">
                    <i class="fa-solid fa-location-crosshairs"></i>Click! Google
                    Map
                  </a>
                </p>
                <p>
                  <i class="fa-solid fa-map-location-dot"></i>
                  Address: 125/6 หมู่ 6 ตำบลนิคมสร้างตนเอง อำเภอเมืองลพบุรี
                  จังหวัดลพบุรี 15000
                </p>
                <p>
                  <i class="fa-solid fa-phone"></i>
                  Tel: 087-662-6644 <br />
                </p>
              </div>
            </Col>
            <Col></Col>
          </Row>
          <span
            className="my-3 rounded-1 w-100"
            style={{ height: "5px", backgroundColor: "#5D8CE2" }}
          />
          <Row className="mb-2">
            <Col className="text-center">Designed by p-sek</Col>
          </Row>
        </Stack>
      </Container>
    </Navbar>
  );
};
