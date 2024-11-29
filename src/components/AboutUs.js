import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import teamData from './teamData';
import PersonCard from './PersonCard';

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '60px 0' }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2
              className="display-4 font-weight-bold"
              style={{
                fontSize: '3rem',
                color: '#343a40',
                textTransform: 'uppercase',
              }}
            >
              Hakkımızda
            </h2>
            <p
              className="lead"
              style={{
                fontSize: '1.2rem',
                color: '#6c757d',
              }}
            >
              NanoWiss, ileri düzey nanoteknoloji çözümleri ile geleceği şekillendiriyor.
            </p>
          </Col>
        </Row>

        {/* Misyon ve Vizyon */}
        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <Card className="shadow-sm border-light">
              <Card.Body>
                <h4 className="font-weight-bold" style={{ color: '#007bff' }}>
                  Misyonumuz
                </h4>
                <p style={{ color: '#495057' }}>
                  NanoWiss, nanoteknoloji alanındaki yenilikçi çözümlerle insan hayatını iyileştirmeyi hedefliyor.
                  Çevre dostu ve sürdürülebilir teknoloji ile global ölçekte etkili projeler geliştirmekteyiz.
                </p>
                <Button variant="outline-primary">Detaylı Bilgi</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="shadow-sm border-light">
              <Card.Body>
                <h4 className="font-weight-bold" style={{ color: '#007bff' }}>
                  Vizyonumuz
                </h4>
                <p style={{ color: '#495057' }}>
                  Geleceğin teknolojilerini şekillendiren bir lider olmak, sürdürülebilir ve güvenli nanoteknoloji
                  çözümleri ile insanlığa katkı sağlamak.
                </p>
                <Button variant="outline-primary">Detaylı Bilgi</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* İstatistikler Bölümü */}
        <Row className="text-center mb-5">
          <Col>
            <h3 className="font-weight-bold" style={{ color: '#007bff' }}>
              NanoWiss İstatistikleri
            </h3>
          </Col>
        </Row>

        <Row>
          <Col md={3} className="mb-4">
            <Card className="shadow-sm text-center border-light">
              <Card.Body>
                <h1 className="display-4" style={{ color: '#007bff' }}>
                  100+
                </h1>
                <p style={{ color: '#495057' }}>Proje Tamamlandı</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card className="shadow-sm text-center border-light">
              <Card.Body>
                <h1 className="display-4" style={{ color: '#007bff' }}>
                  50+
                </h1>
                <p style={{ color: '#495057' }}>Uluslararası İşbirliği</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card className="shadow-sm text-center border-light">
              <Card.Body>
                <h1 className="display-4" style={{ color: '#007bff' }}>
                  200+
                </h1>
                <p style={{ color: '#495057' }}>Başarıyla Uygulanan Teknoloji</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card className="shadow-sm text-center border-light">
              <Card.Body>
                <h1 className="display-4" style={{ color: '#007bff' }}>
                  24/7
                </h1>
                <p style={{ color: '#495057' }}>Destek ve Hizmet</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Ekip Tanıtımı */}
        <Container>
        <h2 className="text-center mb-5" style={{ color: '#007bff' }}>
          Meet Our Team
        </h2>
        <Row>
          {teamData.map((member) => (
            <PersonCard
              key={member.id}
              name={member.name}
              role={member.role}
              img={member.img}
              details={member.details}
            />
          ))}
        </Row>
      </Container>
      </Container>
    </div>
  );
};

export default AboutUs;
