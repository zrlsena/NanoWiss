import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Achievements = () => {
  return (
    <Container fluid className="py-5 bg-light" id="achievements">
      {/* Header Section */}
      <h2 className="text-center text-dark fw-bold mb-4">What We Have Done So Far</h2>
      <p className="text-center text-muted mb-5">
        At NanoWiss, we are proud of our remarkable journey, highlighted by our innovative milestones and strategic collaborations.
      </p>

      {/* Achievements Section */}
      <Row className="justify-content-center g-4">
        {/* TeknoPark Partnership */}
        <Col md={6} lg={5}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="d-flex flex-column align-items-center">
              <div className="achievement-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-building"></i> {/* İkon için Bootstrap Icons kullanıldı */}
              </div>
              <Card.Title className="text-center fw-bold">TeknoPark Partnership</Card.Title>
              <Card.Text className="text-center mt-3">
                We’ve partnered with TeknoPark, empowering our research capabilities and providing state-of-the-art facilities for innovation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Kuluçka Ortaklığı */}
        <Col md={6} lg={5}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="d-flex flex-column align-items-center">
              <div className="achievement-icon bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-lightbulb"></i> {/* İkon için Bootstrap Icons kullanıldı */}
              </div>
              <Card.Title className="text-center fw-bold">Kuluçka Ortaklığı</Card.Title>
              <Card.Text className="text-center mt-3">
                Our collaboration with incubation centers has fostered groundbreaking nano-technology solutions, accelerating our impact.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Achievements;
