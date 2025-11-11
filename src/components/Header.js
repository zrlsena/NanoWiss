import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const handleScroll = () => {
    if (location.pathname !== "/") {
      setIsHeroVisible(false); // Diğer sayfalarda solid yap
      return;
    }
    const heroSection = document.getElementById("home");
    if (!heroSection) return;
    const rect = heroSection.getBoundingClientRect();
    setIsHeroVisible(rect.bottom > 0);
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsHeroVisible(false); // Sayfa değiştiğinde transparanlığı kapat
    } else {
      setIsHeroVisible(true); // Ana sayfadaysa transparanlığı kontrol et
    }
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
      style={{ height: "80px" }}
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
              style={{ cursor: "pointer" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as="span"
              className={isHeroVisible ? "text-light" : "text-dark"}
              onClick={() => scrollToSection("about")}
              style={{ cursor: "pointer" }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as="span"
              className={isHeroVisible ? "text-light" : "text-dark"}
              onClick={() => scrollToSection("achievements")}
              style={{ cursor: "pointer" }}
            >
              Achievements
            </Nav.Link>
            <Nav.Link
              as="span"
              className={isHeroVisible ? "text-light" : "text-dark"}
              onClick={() => scrollToSection("products")}
              style={{ cursor: "pointer" }}
            >
              Products
            </Nav.Link>
            <Nav.Link as="span">
              <Link
                to="/team"
                className={isHeroVisible ? "text-light" : "text-dark"}
                style={{ textDecoration: "none",cursor: "pointer" }}
              >
                Team
              </Link>
            </Nav.Link>
            <Nav.Link as="span">
              <Link
                to="/newsPage"
                className={isHeroVisible ? "text-light" : "text-dark"}
                style={{ textDecoration: "none",cursor: "pointer" }}
              >
                News
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
