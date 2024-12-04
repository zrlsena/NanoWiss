import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaBullseye, FaUsers, FaEye } from 'react-icons/fa';

const AboutUs = () => {
    const darkpurple = "#470069"; 
    const purple = "#7F03BB"; // Mavi
    const lightpurple = "#BB58FF";
    const blue = "#3361AC"; // Mavi
    const white = "#efeeec";

  const [section, setSection] = useState('whoWeAre');

  const handleClick = (sectionName) => {
    setSection(sectionName);
  };

  return (
    <div id="about" style={{ padding: '1%', fontFamily: 'Arial, sans-serif', height: 'auto', marginRight: '0px', marginLeft: '0px', backgroundColor:darkpurple,}}>
      <div className="container" style={{ marginTop: '1%', marginBottom: '1%' }}>
        <div className="row">
          {/* Left Section */}
          <div className="col-md-8" style={{ padding: '5%', height: 'auto', }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold',color:white,marginTop:'30px' }}>
              {section === 'whoWeAre'
                ? 'Who We Are'
                : section === 'ourPurpose'
                ? 'What is Our Purpose'
                : 'Our Mission and Vision'}
            </h2>
            <p style={{ fontSize: '20px', lineHeight: '30px', fontWeight: '300px',color:'#efeeec',minHeight: '250px', }}>
              {section === 'whoWeAre'
                ? "nanoWISS is an innovative startup that originated from a shared mission to tackle pressing challenges such as Cystic Fibrosis and biofilm-related infections. Specializing in the development of autonomous devices for optimizing and standardizing nanoparticle production, we also create high-quality nanoparticles tailored for various applications. Our multidisciplinary team integrates expertise in nanotechnology, biotechnology, and engineering to deliver groundbreaking solutions that bridge science and industry."
                : section === 'ourPurpose'
                ? 'At nanoWISS, our primary goal is the improvement of human life. By addressing critical global challenges, we aim to revolutionize nanoparticle synthesis through precise, efficient, and accessible technologies. Our solutions enable advancements across various fields, driving innovation while fostering sustainability and quality of life improvements worldwide.'
                : 'NanoWISS is a deep technology and social impact startup that is revolutionizing nanoparticle production to treat biofilm bacterial infections in cystic fibrosis. Our goal is to improve the quality of life for those affected by enabling patients to breathe deeper through efficient nanoparticle production. We are committed to raising awareness of rare diseases while fostering a future where scientific innovation leads to meaningful social change, creating a healthier and more informed world.'}
            </p>
          </div>

          {/* Right Buttons Section */}
          <div className="col-md-4" style={{ gap:'15px', paddingInline: '20px', padding: '5%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' , }}>
            <button
              onClick={() => handleClick('whoWeAre')}
              style={{
                width: '45%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                marginBottom: '20px'
              }}
            >
              <FaUserAlt style={{ fontSize: '82px', marginBottom: '10px', color: darkpurple, borderRadius: '41px', padding: '21px', backgroundColor: white, }} />
              <span style={{ fontSize: '14px', fontWeight: 'bold',color: white, }}>Who We Are</span>
            </button>

            <button
              onClick={() => handleClick('ourPurpose')}
              style={{
                width: '45%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                marginBottom: '20px'
              }}
            >
              <FaBullseye style={{  fontSize: '82px', marginBottom: '10px', color: darkpurple, borderRadius: '41px', padding: '21px', backgroundColor: white }} />
              <span style={{ fontSize: '14px', fontWeight: 'bold',color: white }}>Our Purpose</span>
            </button>

            <Link
  to="/team"
  style={{
    textDecoration: 'none',
    width: '45%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    textAlign: 'center',
    cursor: 'pointer',
    padding: '10px', // Dışarıdan kenar boşlukları
    boxSizing: 'border-box', // Kenar boşluklarını hesaba kat
  }}
>
  <button
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%', // Buton Link'in genişliğiyle uyumlu olacak
      height: 'auto', // Yükseklik içeriğe göre
      backgroundColor: 'transparent',
      border: 'none',
      padding: '0', // Fazladan boşluk olmaması için
    }}
  >
    <FaUsers
      style={{
        fontSize: '82px',
        marginBottom: '10px',
        color: darkpurple,
        borderRadius: '41px',
        padding: '21px',
        backgroundColor: 'white',
      }}
    />
    <span
      style={{
        fontSize: '14px',
        fontWeight: 'bold',
        color: 'white',
      }}
    >
      Our Team
    </span>
  </button>
</Link>


            <button
              onClick={() => handleClick('ourMission')}
              style={{
                width: '45%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                textAlign: 'center',
                cursor: 'pointer'
              }}
            >
              <FaEye style={{  fontSize: '82px', marginBottom: '10px', color: darkpurple, borderRadius: '41px', padding: '21px', backgroundColor: white}} />
              <span style={{ fontSize: '14px', fontWeight: 'bold',color: white }}>Our Vision-Mission</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
