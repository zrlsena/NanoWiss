import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const Hero = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh", // Sayfa yüksekliği
        backgroundImage: "url('https://i.pinimg.com/736x/e4/5c/9e/e45c9e78f35f8f0ab8374676a385cb56.jpg')", // Buraya görsel yolunu ekleyin
        backgroundSize: "cover", // Resmin ekranı tamamen kaplamasını sağlar
        backgroundPosition: "center", // Resmin ortalanması
        overflow: "hidden",
      }}
    >
      {/* Sayfa İçeriği */}
      <Container
        className="text-center text-white d-flex align-items-center justify-content-center"
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%", // Sayfa içeriğinin tam olarak ekrana yayılmasını sağlar
        }}
      >
        <Row>
          <Col>
            <h1
              className="display-3 font-weight-bold"
              style={{
                fontSize: "3.5rem", // Büyük ekranlarda başlık boyutu
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Başlık için gölge efekti
              }}
            >
              NanoWiss: Yenilikçi Nanoteknoloji Çözümleri
            </h1>
            <p
              className="lead"
              style={{
                fontSize: "1.2rem", // Paragraf boyutunu biraz küçültüyoruz
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)", // Paragraf için gölge efekti
              }}
            >
              Geleceği şekillendiren nanoteknoloji çözümleriyle sizlere daha
              parlak bir dünya sunuyoruz.
            </p>
            <Button
              variant="primary"
              size="lg"
              href="#about"
              className="mt-3"
              style={{
                padding: "10px 25px", // Buton içeriği için biraz genişlik ekliyoruz
                fontSize: "1.1rem", // Buton yazı boyutunu büyütüyoruz
              }}
            >
              Hakkımızda
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
