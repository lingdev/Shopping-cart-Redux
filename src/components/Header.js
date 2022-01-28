import React from 'react'
import image from '../images/shopside.png'
import styled from "styled-components";
import bg from '../images/black.jpg'
import Tilt from 'react-parallax-tilt';


const Header = () => {
  return (
    <Container bg={bg}>
      <Wrapper>
        <InnerWrapper>
          <Left>
        <h1>Fashion Store</h1> 
        <h2>Online Shopping</h2> 

          </Left>
          <TiltWrapper options={{ max: 25 }}>
            <Img src={image} alt="store" />

          </TiltWrapper>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

const Left = styled.div`
  width: 40%;
  @media (max-width: 670px) {
    width: 100%;
  }
`;

const TiltWrapper = styled(Tilt)`
  width: 60%;
  min-width: 400px;
  @media (max-width: 670px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 100%;
  height:80vh;
`;

const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  /* margin: 2rem; */
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    color: #FFFAFA;   
  }
  h2 {
    color: #515151;
    font-weight: 500;
    font-size: 5rem;
    margin-bottom: 1rem;
  }
`;


export default Header;

