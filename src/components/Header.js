import React, { useState, useEffect, useCallback } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  // useCallback ile handleScroll’u sarmalıyoruz, böylece useEffect dependency’si stabil oluyor
  const handleScroll = useCallback(() => {
    if (location.pathname !== "/") {
      setIsHeroVisible(false);
      return;
    }
    const heroSection = document.getElementById("home");
    if (!heroSection) return;
    const rect = heroSection.getBoundingClientRect();
    setIsHeroVisible(rect.bottom > 0);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsHeroVisible(false);
    } else {
      setIsHeroVisible(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, location.pathname]); // handleScroll artık dependency olarak ekli

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
        isHeroVisible ? "navbar-transparent" : "navbar-solid"
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
            {["home", "about", "achievements", "products"].map((id) => (
              <Nav.Link
                key={id}
                as="span"
                className={isHeroVisible ? "text-light" : "text-dark"}
                onClick={() => scrollToSection(id)}
                style={{ cursor: "pointer" }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Nav.Link>
            ))}
            <Nav.Link as="span">
              <Link
                to="/team"
                className={isHeroVisible ? "text-light" : "text-dark"}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                Team
              </Link>
            </Nav.Link>
            <Nav.Link as="span">
              <Link
                to="/newsPage"
                className={isHeroVisible ? "text-light" : "text-dark"}
                style={{ textDecoration: "none", cursor: "pointer" }}
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
