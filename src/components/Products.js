import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Products = () => {
  const productList = [
    {
      imgSrc: 'https://via.placeholder.com/300x200', // Placeholder görsel, gerçek görselleri buraya ekleyin
      title: 'Nanoparticles Initially Produced in Our Lab',
      description:
        'At the beginning, nanoparticles were produced in our laboratory, and later with our nanoWISS autonomous device.',
    },
    {
      imgSrc: 'https://via.placeholder.com/300x200',
      title: 'Nanoparticles Initially Produced in Our Lab',
      description:
        'Our cutting-edge device enables sustainable and autonomous production of nanoparticles, ensuring scalability and eco-friendly production.',
    },
    {
      imgSrc: 'https://via.placeholder.com/300x200',
      title: 'Nanoparticle-Containing Products',
      description:
        'Our products include: Agricultural solutions, Disinfection products, and Biofilm infection treatment.',
    },
  ];

  return (
    <section id="products" className="py-5 bg-light">
      <Container style={{ marginTop: '60px', marginBottom: '60px' }}>
        <h2 className="text-center text-dark fw-bold mb-4">Our Potential Products</h2>
        <p className="text-center text-muted mb-5">
        We are revolutionizing the field of nanotechnology with our products. Here are some of our featured products:
        </p>
        <Row className="g-4">
          {productList.map((product, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={product.imgSrc}
                  alt={product.title}
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                <Card.Body>
                  <Card.Title className="text-dark fw-bold">{product.title}</Card.Title>
                  <Card.Text className="text-muted">{product.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Products;
