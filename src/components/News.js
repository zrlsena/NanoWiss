import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import lab1 from "../assets/lab1.png";
import lab2 from "../assets/lab2.png";
import lab3 from "../assets/lab3.png";

function News() {
  const newsItems = [
    {
      title: "AMM Annual Meeting",
      date: "Nov 13, 2024",
      details: "11.13-11.15 | Boston, MA | USA",
      imgSrc: lab1, // Resim URL'sini ekleyin
      link: "#",
    },
    {
      title: "TIDES Europe 2024",
      date: "Nov 12, 2024",
      details: "11.12-11.14 | Hamburg | Germany",
      imgSrc: lab2, // Resim URL'sini ekleyin
      link: "#",
    },
    {
      title: "12th International mRNA Health Conference",
      date: "Nov 12, 2024",
      details: "11.12-11.14 | Boston, MA | USA",
      imgSrc: lab3, // Resim URL'sini ekleyin
      link: "#",
    },
  ];

  return (
    <div className="container my-4">
      {/* Başlık ve "All News" Butonu */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 style={{color:'#3361AC', fontSize:'40px', fontWeight:'500'}}>Latest News</h2>
        <button to="/newsPage" className="btn btn-outline-primary rounded-pill">All News</button>
      </div>

      {/* Haber Kartları */}
      <div className="row g-4">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className={`col-${index === 0 ? "8" : "5"} col-lg-${
              index === 0 ? "6" : "3"
            }`}
          >
            <div
              className="card h-100"
              style={{
                border: "none", // Border tamamen kaldırıldı
                boxShadow: "none", // Hover gölgeleri kaldırıldı
                transform: "none", // Hover'da büyüme iptal
                transition: "none", // Geçiş efektleri iptal
                color:'#3361AC',
              }}
            >
              <img
                src={item.imgSrc}
                className="card-img-top"
                alt={item.title}
              />
              <div className="card-body" >
                <h6 style={{color:'#162f65',fontSize:'14px', fontWeight:'300'}}>{item.date}</h6>
                <h5 style={{color:'#3361ac',fontSize:'20px' ,fontWeight:'700'}}>{item.title}</h5>
                <p style={{color:'#162f65',fontSize:'16px', fontWeight:'300'}}>{item.details}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
