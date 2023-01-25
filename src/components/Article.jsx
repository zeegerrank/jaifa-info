import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Articles from "../data/Articles";

const Article = (props) => {
  const findArticleByName = Articles.find((ac) => ac.name === props.Name);

  return (
    <div>
      <Row className="text-center row-cols-1 mt-2 mb-1 row-cols-md-2 mt-lg-3">
        <Col className="pt-md-4 pt-lg-0 px-lg-5">
          <div className="d-md-none">
            <h1 className="mb-3">{findArticleByName.header}</h1>
          </div>

          <img
            className="img-fluid text-lg-center pt-md-3"
            src={findArticleByName.img[0]}
          />
          <img
            className="img-fluid text-lg-center pt-md-3"
            src={findArticleByName.img[1] || null}
          />
        </Col>
        <Col className="mt-3 px-3 px-md-3 d-lg-flex align-items-lg-center">
          <Col>
            <div className=" d-none d-md-block text-md-start">
              <h4>{findArticleByName.header}</h4>
            </div>
            <h6 className="text-start px-1" style={{ textIndent: "50px" }}>
              {findArticleByName.body}
            </h6>
          </Col>
        </Col>
      </Row>
      <Row className="text-end mb-3">
        <Col className=" order-last">
          <Button id="call-for-action" href={findArticleByName.btnAction.path}>
            {findArticleByName.btnAction.text}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Article;
