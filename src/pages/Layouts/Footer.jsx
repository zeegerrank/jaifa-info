import React from "react";import { Container, Navbar, Row, Col, Stack } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer>
      <Navbar className="fixed-bottom" bg="primary" variant="dark">
        <Container>
          <Stack className="bg-danger">
            <Row>
              <Col className="text-center">Social Media</Col>
            </Row>
            <Row>
              <Col>Company</Col>
              <Col>Products</Col>
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
