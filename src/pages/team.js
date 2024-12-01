import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import teamData from '../components/teamData';
import PersonCard from '../components/PersonCard';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Team = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
  return (
    <div>
        <Header/>
      <Container style={{marginBottom:'120px',}}>
        <h2 className="text-center mb-5" style={{ color: 'rgb(66 39 104)', marginTop: '120px', fontSize: '32px', fontWeight: '600', }}>
        Discover the passionate minds behind our innovation and creativity — meet the team that makes it all possible!,
        </h2>
        <hr class="custom-line" />
        <Row style={{marginTop:'120px',}}>
          {teamData.map((member) => (
            <PersonCard 
              key={member.id}
              name={member.name}
              role={member.role}
              img={member.img}
              details={member.details}
            />
          ))}
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default Team;
