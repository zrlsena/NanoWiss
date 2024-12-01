import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaBullseye, FaUsers, FaEye } from 'react-icons/fa';

const AboutUs = () => {
  const [section, setSection] = useState('whoWeAre');

  const handleClick = (sectionName) => {
    setSection(sectionName);
  };

  return (
    <div id="about" style={{ padding: '5%', fontFamily: 'Arial, sans-serif', height: 'auto', marginRight: '0px', marginLeft: '0px', backgroundColor:'rgb(66 39 104)'}}>
      <div className="container" style={{ marginTop: '1%', marginBottom: '1%' }}>
        <div className="row">
          {/* Left Section */}
          <div className="col-md-8" style={{ padding: '5%', height: 'auto', minHeight: '250px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold',color:'#efeeec' }}>
              {section === 'whoWeAre'
                ? 'Who We Are'
                : section === 'ourPurpose'
                ? 'What is Our Purpose'
                : 'Our Mission and Vision'}
            </h2>
            <p style={{ fontSize: '20px', lineHeight: '30px', fontWeight: '300px',color:'#efeeec' }}>
              {section === 'whoWeAre'
                ? "nanoWISS is an innovative startup that originated from a shared mission to tackle pressing challenges such as Cystic Fibrosis and biofilm-related infections. Specializing in the development of autonomous devices for optimizing and standardizing nanoparticle production, we also create high-quality nanoparticles tailored for various applications. Our multidisciplinary team integrates expertise in nanotechnology, biotechnology, and engineering to deliver groundbreaking solutions that bridge science and industry."
                : section === 'ourPurpose'
                ? 'At nanoWISS, our primary goal is the improvement of human life. By addressing critical global challenges, we aim to revolutionize nanoparticle synthesis through precise, efficient, and accessible technologies. Our solutions enable advancements across various fields, driving innovation while fostering sustainability and quality of life improvements worldwide.'
                : 'NanoWISS is a deep technology and social impact startup that is revolutionizing nanoparticle production to treat biofilm bacterial infections in cystic fibrosis. Our goal is to improve the quality of life for those affected by enabling patients to breathe deeper through efficient nanoparticle production. We are committed to raising awareness of rare diseases while fostering a future where scientific innovation leads to meaningful social change, creating a healthier and more informed world.'}
            </p>
          </div>

          {/* Right Buttons Section */}
          <div className="col-md-4" style={{ gap:'15px', paddingInline: '20px', padding: '5%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
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
              <FaUserAlt style={{ fontSize: '82px', marginBottom: '10px', color: 'rgb(66 39 104)', borderRadius: '41px', padding: '21px', backgroundColor: '#efeeec' }} />
              <span style={{ fontSize: '14px', fontWeight: 'bold',color: '#efeeec' }}>Who We Are</span>
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
              <FaBullseye style={{  fontSize: '82px', marginBottom: '10px', color: 'rgb(66 39 104)', borderRadius: '41px', padding: '21px', backgroundColor: '#efeeec' }} />
              <span style={{ fontSize: '14px', fontWeight: 'bold',color: '#efeeec' }}>Our Purpose</span>
            </button>

            <Link to="/team" style={{ textDecoration: 'none', width: '45%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                textAlign: 'center',
                cursor: 'pointer', }}>
              <button
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  marginBottom: '20px'
                }}
              >
                <FaUsers style={{ fontSize: '82px', marginBottom: '10px', color: 'rgb(66 39 104)', borderRadius: '41px', padding: '21px', backgroundColor: '#efeeec' }} />
                <span style={{ fontSize: '14px', fontWeight: 'bold',color: '#efeeec' }}>Our Team</span>
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
              <FaEye style={{  fontSize: '82px', marginBottom: '10px', color: 'rgb(66 39 104)', borderRadius: '41px', padding: '21px', backgroundColor: '#efeeec'}} />
              <span style={{ fontSize: '14px', fontWeight: 'bold',color: '#efeeec' }}>Our Vision-Mission</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
