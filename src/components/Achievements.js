import React from 'react';
import { Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import lab1 from "../assets/lab1.png";
import lab2 from "../assets/lab2.png";
import lab3 from "../assets/lab3.png";

const Achievements = () => {
  const slides = [
    {
      imgSrc: lab1, // Use the imported image
      title: "Nanoparticle Production",
      description: "Efficient and scalable production of nanoparticles for medical applications.",
    },
    {
      imgSrc: lab2, // Use the same imported image for the second slide
      title: "Biofilm Treatment",
      description: "Innovative solutions for treating biofilm bacterial infections in cystic fibrosis.",
    },
    {
      imgSrc: lab3, // Use the same imported image for the third slide
      title: "Rare Disease Awareness",
      description: "Raising awareness and supporting research for rare diseases.",
    },
  ];

  return (
    <div id="achievements" >
       <Container fluid className="py-5 bg-light" id="achievements">
      <div style={{ marginTop: '60px', marginBottom: '60px' }}>
        {/* Header Section */}
        <h2 className="text-center text-dark fw-bold mb-4">
          What We Have Done So Far
        </h2>
        <p className="text-center text-muted mb-5">
          At NanoWiss, we are proud of our remarkable journey, highlighted by
          our innovative milestones and strategic collaborations.
        </p>

        {/* Achievements Section */}
        <Row className="justify-content-center g-4">
          {/* TeknoPark Partnership */}
          <Col md={6} lg={5}>
            <Card className="h-100 shadow-sm border-0 no-hover">
              <Card.Body className="d-flex flex-column align-items-center">
                <div
                  className="achievement-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-4"
                  style={{ width: '80px', height: '80px' }}
                >
                  <i className="bi bi-building"></i>
                </div>
                <Card.Title className="text-center fw-bold">
                  TeknoPark Partnership
                </Card.Title>
                <Card.Text className="text-center mt-3">
                  We’ve partnered with TeknoPark, empowering our research
                  capabilities and providing state-of-the-art facilities for
                  innovation.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Kuluçka Ortaklığı */}
          <Col md={6} lg={5}>
            <Card className="h-100 shadow-sm border-0 no-hover">
              <Card.Body className="d-flex flex-column align-items-center">
                <div
                  className="achievement-icon bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center mb-4"
                  style={{ width: '80px', height: '80px' }}
                >
                  <i className="bi bi-lightbulb"></i>
                </div>
                <Card.Title className="text-center fw-bold">
                  Kuluçka Partnership
                </Card.Title>
                <Card.Text className="text-center mt-3">
                  Our collaboration with incubation centers has fostered
                  groundbreaking nano-technology solutions, accelerating our
                  impact.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>

      <div className="bd-example" >
        <Carousel >
          {slides.map((slide, index) => (
            <Carousel.Item key={index} >
              <img
                className="d-block w-100"
                src={slide.imgSrc} // Ensure this is correctly assigned
                alt={`Slide ${index + 1}`}
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8))",
                  zIndex: 1,
                }}
              />
              <Carousel.Caption style={{ zIndex: 2 }}>
                <h5>{slide.title}</h5>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Achievements;
