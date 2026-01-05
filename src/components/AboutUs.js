import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaBullseye, FaUsers, FaEye } from 'react-icons/fa';

const AboutUs = () => {
    const darkpurple = "grey"; 
    
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
            <p style={{ fontSize: '20px', lineHeight: '30px', fontWeight: '300px',color:white ,minHeight: '250px', }}>
              {section === 'whoWeAre'
                ? "nanoWISS is a deep technology and social impact startup that aims to facilitate applications in areas such as treatment and agriculture that produce nanoparticles that produce nanoparticles that set out with the ideal of treating biofilm bacterial infections in cystic fibrosis disease and allowing patients to breathe deeper, and aims to make nanoparticle production efficient and to raise awareness of rare diseases."
                : section === 'ourPurpose'
                ? 'We aim to create a movement, not just a start-up, to transform the world and transcend borders. We are a team that strives to add value to people’s lives at every step, to build the future, and to strive for a more sustainable and equal world. Are you ready to join this journey?'
                : 'We aim to be a catalytic force in global health and sustainability by leveraging the transformative power of nanotechnology. Our Vision centers on drastically reducing antibiotic resistance, particularly against challenging biofilm infections, through advanced nanoparticle applications, while simultaneously facilitating the efficient and accessible production of these materials for use in agriculture and other sectors. As a purpose-driven start-up, we also commit to educating future generations on environmental stewardship and raising critical awareness regarding rare diseases. Our Mission is to bridge the gap between academia and industry by translating cutting-edge research in rare diseases and nanotechnology into tangible, scalable products. This involves actively supporting young scientists and their projects, increasing social awareness, and ultimately making advanced, effective drug production accessible and affordable by streamlining the nanoproduction process.'}
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
                width: '100%', 
                height: 'auto', 
                backgroundColor: 'transparent',
                border: 'none',
                padding: '0', 
              }}
            >
              <FaUsers style={{  fontSize: '82px', marginBottom: '10px', color: darkpurple, borderRadius: '41px', padding: '21px', backgroundColor: white}}/>
              <span style={{ fontSize: '14px', fontWeight: 'bold',color: white }}>
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
