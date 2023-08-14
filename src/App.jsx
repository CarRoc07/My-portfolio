import styled, { keyframes } from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

const slideAndBounce = keyframes`
  0% {
    top: 450px;
    right: -500px;
    transform: translateX(0);
  }
  25% {
    top: 350px;
    right: -400px;
    transform: translateX(20px);
  }
  50% {
    top: 250;
    right: -200px;
    transform: translateY(-20px);
  }
  75% {
    top: 50px;
    right: -100px;
    transform: translateY(0);
  }
  100% {
    top: -60px;
    right: -50px;
    transform: translateX(0);
  }
`;

const slideAndBounce2 = keyframes`
  0%, 100% {
    top: 80px;
    left: -400px;
    transform: translateX(0);
  }
  25% {
    top: 100px;
    left: -300px;
    transform: translateX(20px);
  }
  50% {
    top: 300px;
    left: -230px;
    transform: translateY(-20px);
  }
  65% {
    top: 400px;
    left: -300px;
    transform: translateY(-20px);
  }
  75% {
    top: 550px;
    left: -400px;
    transform: translateY(0);
  }
  85% {
    top: 450px;
    left: -480px;
    transform: translateY(0);
  }
`;

const slideAndBounce3 = keyframes`
  0% {
    top: 1300px;
    left: -700px;
    transform: translateX(0);
  }
  25% {
    top: 1350px;
    left: -500px;
    transform: translateX(20px);
  }
  50% {
    top: 1550px;
    left: -300px;
    transform: translateY(-20px);
  }
  75% {
    top: 1750px;
    left: -150px;
    transform: translateY(0);
  }
  100% {
    top: 1950px;
    left: -100px;
    transform: translateX(0);
  }
`;

const translateDivider = keyframes`
  0%, 100% {
    top: calc(30% - 1.5px);
    left: 10px;
    transform: translateX(0);
  }
  50% {
    top: calc(30% - 1.5px);
    left: calc(100% - 210px);
    transform: translateX(0);
  }
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  height: 100%;
  background-color:#2b2a2a;
  position: relative;
`;

const Circle1 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  padding: 10px;
  border-radius: 50%;
  border: none;
  background: #6366f1;
  animation: ${slideAndBounce} 12s linear infinite;

  @media (max-width: 1800px) {
    display: none;
  }
  `

const Circle2 = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  padding: 10px;
  border-radius: 50%;
  border: none;
  background: #db2777;
  animation: ${slideAndBounce2} 18s linear infinite;

  @media (max-width: 1800px) {
    display: none;
  }
`

const Circle3 = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  padding: 10px;
  border-radius: 50%;
  border: none;
  background: #6366f1;
  animation: ${slideAndBounce3} 18s linear infinite;

  @media (max-width: 1800px) {
    display: none;
  }
`

const Divider = styled.div`
  position: absolute;
  padding: 3px;
  width: 200px;
  height: 3px;
  background: linear-gradient(to bottom right, #6366f1, #db2777);
  border-radius: 12px;
  border: 1px solid white;

  animation: ${translateDivider} 18s linear infinite;

  @media (max-width: 600px) {
    display: none;
  }
  `

const App = () => {
  return (
    <Container>
      <Navbar />
      <Circle1 />
      <Circle2 />
      <Circle3 />
      <Divider />
      <Hero />
      <Projects />
      <Skills/>
      <Footer />
    </Container>
  );
};

export default App;