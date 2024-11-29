import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Achievements = () => {
  return (
    <Container fluid className="py-5" id="achievements">
      <h2 className="text-center text-primary mb-4">Our Achievements</h2>
      <p className="text-center mb-5 text-muted">
        Here are some of the milestones we've achieved in the nano-technology field. We continue to innovate and lead the industry.
      </p>
      
      <Row className="g-4">
        <Col md={4}>
          <Card className="shadow-lg border-0">
            <Card.Body>
              <Card.Title className="text-center text-primary">Innovation Award</Card.Title>
              <Card.Text>
                We were awarded for our outstanding innovation in nano-technology solutions, showcasing our cutting-edge technology.
              </Card.Text>
              <Button variant="dark" className="w-100">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-lg border-0">
            <Card.Body>
              <Card.Title className="text-center text-primary">Partnership with Global Leaders</Card.Title>
              <Card.Text>
                Our partnership with industry leaders has set new standards in nano-technology research and development.
              </Card.Text>
              <Button variant="dark" className="w-100">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-lg border-0">
            <Card.Body>
              <Card.Title className="text-center text-primary">Breakthrough Research</Card.Title>
              <Card.Text>
                We made significant contributions to the understanding and development of new nano-tech materials, advancing the field.
              </Card.Text>
              <Button variant="dark" className="w-100">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Achievements;
