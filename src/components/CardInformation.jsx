import React from "react";
import { Card, Container } from "react-bootstrap";
const CardInformation = (props) => {
  return (
    <Container>
      <Card className="w-25">
        <Card.Body>
          <Card.Title>{props.productName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.category}
          </Card.Subtitle>
          <Card.Img src={props.imgSrc} alt={props.imgName} />
          <Card.Text>{props.description}</Card.Text>
          <Card.Text>{props.price}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardInformation;
