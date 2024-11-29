import React from 'react';
import { Card, Col } from 'react-bootstrap';

const PersonCard = ({ name, role, img, details }) => {
  return (
    <Col md={4} sm={6} className="mb-4 d-flex justify-content-center align-items-stretch">
      <Card
        className="shadow-lg border-0 text-center position-relative"
        style={{
          width: '16rem',  // Kartın genişliği
          height: '350px', // Yükseklik sabit
          borderRadius: '12px',
          overflow: 'hidden',
          transition: 'transform 0.3s ease',
        }}
      >
        {/* Resim Tam Kaplama */}
        <Card.Img
          variant="top"
          src={img}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />

        {/* Kart içeriği */}
        <div
          className="card-body"
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '15px',
            transition: 'background-color 0.3s ease',
            zIndex: 1,
          }}
        >
          <Card.Title className="fw-bold" style={{ color: '#212529' }}>
            {name}
          </Card.Title>
          <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>
            {role}
          </Card.Text>
        </div>

        {/* Hover ile paragraf görünür */}
        <div
          className="p-3"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            color: '#fff',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '15px',
            textAlign: 'center',
            fontSize: '0.9rem',
            zIndex: 1,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
        >
          {/* Detaylar burada olabilir */}
          <p>{details}</p> 
        </div>
      </Card>
    </Col>
  );
};

export default PersonCard;
