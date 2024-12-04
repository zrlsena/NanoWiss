import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import geminiImage from "../assets/geminiW.png";
import { Link  } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="mb-4">
          {/* Şirket Bilgileri */}
          <Col md={4}>
            <h5 className="fw-bold">nanoWISS</h5>
            <p>
              Leading the way in nanotechnology innovation, empowering industries with cutting-edge solutions.
            </p>
            <p>&copy; 2024 nanoWISS. All rights reserved.</p>
          </Col>

          {/* Kısayollar */}
          <Col md={4}>
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-white text-decoration-none">Home</a>
              </li>
              <li>
                <a href="#products" className="text-white text-decoration-none">Products</a>
              </li>
              <li>
                <a href="#achievements" className="text-white text-decoration-none">Achievements</a>
              </li>
              <li>
              <Link to="/team" className="text-white text-decoration-none" >
                Team
              </Link>
              </li>
            </ul>
          </Col>

          {/* Sosyal Medya & İletişim */}
          <Col md={4}>
            <h5 className="fw-bold">Connect with Us</h5>
            <p>
              <a href="mailto:info@nanowiss.com" className="text-white text-decoration-none">
                info@nanowiss.com
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/nanowiss.co/" className="text-white text-decoration-none">
                Instagram: @nanowiss.co
              </a>
            </p>
            <p>
              <a href="https://www.linkedin.com/company/nanowiss" className="text-white text-decoration-none">
                LinkedIn: nanoWISS
              </a>
            </p>
          </Col>
        </Row>

        {/* Alt Kısım: Telif Hakkı & Geliştirici Bilgisi */}
        <Row className="border-top pt-3">
          <Col>
            <p style={{ fontSize: '12px', marginBottom: '0', color: 'grey' }}>
              Website developed by Sena Zorlu
              <img
                src={geminiImage}
                alt="Gemini"
                style={{
                  width: "16px",
                  height: "auto",
                  opacity: "50%",
                  marginLeft: "2px",
                  marginBottom: "2px",
                }}
              />
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
