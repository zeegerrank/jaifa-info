import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Home = () => {
  return (
    <Container>
      <Row className="text-center row-cols-1 my-3 row-cols-md-2 my-lg-5">
        <Col className="pt-md-4 pt-lg-0">
          <div className="d-md-none">
            <h1>ใจฟ้าฟาร์ม</h1>
            <h1>เกษตรออร์แกนิค</h1>
          </div>

          <img
            className="d-lg-none"
            src="https://via.placeholder.com/300x250.jpg"
          />
          <img
            className="d-none d-lg-block float-lg-end px-lg-4"
            src="https://via.placeholder.com/420x350.jpg"
          />
        </Col>
        <Col className="mt-3 px-3 px-md-0 d-lg-flex align-items-lg-center">
          <Col>
            <div className=" d-none d-md-block text-md-start">
              <h4>ใจฟ้าฟาร์ม เกษตรออร์แกนิค</h4>
            </div>
            <h6 className="text-start px-1" style={{ textIndent: "50px" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
              laboriosam reprehenderit, possimus doloribus iure, eveniet commodi
              dolorum alias iusto exercitationem maxime voluptates facilis
              quaerat nihil et, ducimus dicta vero aut voluptate odio error.
              Tempore nihil dolorum quas nemo voluptatibus repudiandae, quam
              voluptate cum dicta beatae nesciunt officia. Corrupti doloribus
              eos commodi deleniti dolorum dolore, rem quos veniam earum sed
              error, obcaecati perspiciatis minus hic ipsa vitae natus in
              voluptas adipisci, similique ut nam ex. Quam.
            </h6>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
