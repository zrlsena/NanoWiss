import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const handleScroll = () => {
    if (location.pathname !== "/") return; // Sadece ana sayfada kontrol yap
    const heroSection = document.getElementById("home");
    if (!heroSection) return;
    const rect = heroSection.getBoundingClientRect();
    setIsHeroVisible(rect.bottom > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`shadow-sm ${
        isHeroVisible
          ? "navbar-transparent" // Transparan sınıfı
          : "navbar-solid" // Düz arka plan sınıfı
      }`}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold"
          style={{ color: isHeroVisible ? "white" : "purple" }}
        >
          NanoWiss
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as="span"
              className={isHeroVisible ? "text-light" : "text-dark"}
              onClick={() => scrollToSection("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as="span"
              className={isHeroVisible ? "text-light" : "text-dark"}
              onClick={() => scrollToSection("about")}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as="span"
              className={isHeroVisible ? "text-light" : "text-dark"}
              onClick={() => scrollToSection("achievements")}
            >
              Achievements
            </Nav.Link>
            <Nav.Link
              as="span"
              className={isHeroVisible ? "text-light" : "text-dark"}
              onClick={() => scrollToSection("products")}
            >
              Products
            </Nav.Link>
            <Nav.Link
              as="span"
              className={isHeroVisible ? "text-light" : "text-dark"}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
