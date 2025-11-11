import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

function NewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      {/* Üst Banner */}
      <div
        className="text-white d-flex flex-column justify-content-start align-items-start"
        style={{
          backgroundImage:
            "url('https://aricevre.com/wp-content/uploads/2024/08/close-up-hand-holding-lab-tube-scaled.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "auto",
          position: "relative",
          padding: "10%",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 50, 0.7)",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></div>
        <div style={{ position: "relative", zIndex: 2, textAlign: "left" }}>
          <h4 style={{ fontSize: "20px", fontWeight: "300" }}>News & Events</h4>
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "500",
              marginTop: "40px",
              lineHeight: "1.1",
            }}
          >
            Stay updated on the latest <br /> news and events
          </h1>
        </div>
      </div>

      {/* Haber Kartları */}
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card text-start">
              <img
                src="https://via.placeholder.com/600x400"
                className="card-img-top"
                alt="Event 1"
              />
              <div className="card-body">
                <h5 className="card-title">AMM Annual Meeting</h5>
                <p className="card-text">11.13-11.15 | Boston, MA | USA</p>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-start">
              <img
                src="https://via.placeholder.com/600x400"
                className="card-img-top"
                alt="Event 2"
              />
              <div className="card-body">
                <h5 className="card-title">TIDES Europe 2024</h5>
                <p className="card-text">11.12-11.14 | Hamburg | Germany</p>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-start">
              <img
                src="https://via.placeholder.com/600x400"
                className="card-img-top"
                alt="Event 3"
              />
              <div className="card-body">
                <h5 className="card-title">
                  12th International mRNA Health Conference
                </h5>
                <p className="card-text">11.12-11.14 | Boston, MA | USA</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewsPage;
