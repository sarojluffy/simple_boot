import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
const Gridd = () => {
  return (
    <Container className="m-5">
      <Row>
        <Col>
          <Card
            className="m-5 text-center border border-0"
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>{" "}
        </Col>
        <Col>
          {" "}
          <Card
            className="m-5 text-center border border-0"
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="m-5 text-center border border-0"
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Gridd;
