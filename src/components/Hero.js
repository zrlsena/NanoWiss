import React from "react";
import {  Container, Row, Col } from "react-bootstrap";
import geminiImage from "../assets/geminiW.png";
import backgroundVideo from "../assets/dna.mp4"; 

const Hero = () => {
  return (
    <div id="home"
      style={{
        position: "relative",
        height: "100vh", // Sayfa yüksekliği
        backgroundSize: "cover", // Resmin ekranı tamamen kaplamasını sağlar
        backgroundPosition: "center", // Resmin ortalanması
        overflow: "hidden",
      }}
    >
 <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Videonun tam ekranı doldurmasını sağlar
          zIndex: -1, // İçeriğin arkasına geçmesi için
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(128, 0, 128, 0.99)", // Hafif mor bir ton
          mixBlendMode: "multiply", // Renk efektlerini karıştırır
          zIndex: 0, // Videonun üstüne ama içeriğin altına geçer
        }}
      ></div>
      {/* Sayfa İçeriği */}
      <Container
        className="text-center text-white d-flex align-items-center "
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
                fontSize: "60px", // Büyük ekranlarda başlık boyutu
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Başlık için gölge efekti
                textAlign: "left",
                marginBottom:"16px",
                fontWeight: 700,
                lineHeight: "1.2",
              }}
            >
              Nanoparticles for a Deeper Breaths
            </h1>
            
            <p
              className="lead"
              style={{
                fontSize: "25px", // Paragraf boyutunu biraz küçültüyoruz
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)", // Paragraf için gölge efekti
                textAlign: "left",
                marginTop:"16px",
                lineHeight:"30px",
                fontWeight: 300 ,
              }}
            >
              Transforming lives with groundbreaking <br/> solutions for rare diseases.
            </p>
            
          </Col>
        </Row>
      </Container>
      <img
        src={geminiImage}
        alt="Gemini"
        style={{
          position: "absolute",
          bottom: "30px", // Sayfanın altına 20px mesafe
          right: "30px", // Sayfanın sağ tarafına 20px mesafe
          width: "32px", // Genişlik
          height: "auto", // Yükseklik oranını korur
          opacity: "50%", // Opaklık
        }}
      />
    </div>
  );
};

export default Hero;
