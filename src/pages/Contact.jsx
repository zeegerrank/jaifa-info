import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import Map from "../components/Map";

const Contact = () => {
  return (
    <Container className="my-5">
      <Row className="">
        <Col className="" sm={{ order: "first" }} xs={{ order: "last" }}>
          <h3 className="d-lg-flex d-none mb-3">Navigate to Jaifa Farm</h3>
          <Map className="" size="s" />
        </Col>
        <Col className="text-center text-sm-start mt-md-4">
          <Col className="h5" style={{ textDecoration: "underline" }}>
            Contact
          </Col>
          <Col className="mt-3">
            <h6>
              <i class="fa-solid fa-map-location-dot"></i>Address
            </h6>
            <p style={{ textIndent: "20px" }}>
              125/6 หมู่ 6 ตำบลนิคมสร้างตนเอง อำเภอเมืองลพบุรี จังหวัดลพบุรี
              15000
            </p>
            <h6>
              <i class="fa-solid fa-phone"></i>Telephone
            </h6>
            <p className="">
              <span
                className=" d-md-inline-block"
                style={{ height: "3px", width: "20px" }}
              />
              087-662-6644
            </p>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
