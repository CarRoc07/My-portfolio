import { styled, keyframes } from "styled-components"
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const gradientAnimation = keyframes`
    0%, 100% {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
    50% {
        clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%);
    }
`;

const ContainerHero = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 12px;
    padding: 10px;
    margin-bottom: 140px;

    @media (max-width: 420px) {
        margin-bottom: 70px;
    }
    `

const ContainerTitle = styled.div``

const Title = styled.h1`
    font-size: 4.5rem;
    position: relative;
    font-weight: 800;
    padding: 1px 0px;

    @media (max-width: 600px) {
        font-size: 3.5rem;
    }

    @media (max-width: 450px) {
        font-size: 2.75rem;
    }

    @media (max-width: 357px) {
        font-size: 2.25rem;
    }

    &::before {
        content: '${props => props.children}';
        margin: 0;
        padding: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom right, #db2777, #6366f1);
        -webkit-background-clip: text;
        color: transparent;
        animation: ${gradientAnimation} 9s infinite;
    }
    `

const Subtitle = styled.h4`
    font-style: italic;
    font-weight: 300;
    font-size: 1.25rem;
    opacity: .7;

    @media (max-width: 400px) {
        font-size: 1.15rem;
    }
    `

const InfoAboutMe = styled.p`
    font-size: 18px;
    line-height: 1.7;

    @media (max-width: 430px) {
        font-size: 15px;
    }
    `

const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 12px 0px;

    @media (max-width: 470px) {
        gap: 10px;
        flex-wrap: wrap;
    }
    `

const ButtonStyledContact = styled.button`
    border-radius: 8px;
    border: 1px solid white;
    padding: 12px;
    font-size: 1.3rem;
    cursor: pointer;
    background-color: #2b2a2a;
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        background-color: #444444;
    }
    `

const ButtonStyledCV = styled.button`
    border-radius: 8px;
    padding: 12px;
    font-size: 1.3rem;
    cursor: pointer;
    background-color: #2b2a2a;
    display: flex;
    align-items: center;
    gap: 12px;
    background: linear-gradient(to bottom right, #6366f1, #db2777);
    max-height: 50px;
    border: 1px solid #6366f1;
    font-weight: 700;

    &:hover {
        background: linear-gradient(to bottom right, #db2777, #6366f1);
    }

    @media (max-width: 470px) {
        font-size: 1.1rem;
    }
    `

const Hero = () => {
    return (
        <ContainerHero id="aboutSection">
            <h3 style={{ fontWeight: "400", fontSize: "1.25rem"  }}>¡Hola! 👋</h3>
            <ContainerTitle>
                <Title>Soy Carlos Stoll</Title>
                <Subtitle>Web Developer Full Stack</Subtitle>
            </ContainerTitle>
            <InfoAboutMe>Siento una auténtica pasión por el desarrollo web y la tecnología. Aunque mi experiencia se basa en proyectos personales, nunca dejo de sentir emoción por aprender y superarme.
                Mi objetivo es obtener una oportunidad laboral que me permita afrontar nuevos retos y perfeccionar mis habilidades. <br /> Me encanta crear experiencias de usuario atractivas y funcionales, y siempre estoy ansioso por ampliar mis conocimientos y adentrarme en tecnologías novedosas.
                Me entusiasma seguir creciendo profesionalmente y aportar soluciones tecnológicas e innovadoras.</InfoAboutMe>
            <ContainerButtons>
                <a href="https://github.com/CarRoc07" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}> 
                    <ButtonStyledContact>
                        Github <FaGithub />
                    </ButtonStyledContact>
                </a>
                <a href="https://www.linkedin.com/in/carlos-stoll-54242b221/" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                    <ButtonStyledContact>
                        Linkedin <FaLinkedin />
                    </ButtonStyledContact>
                </a>
                <a href="/Curriculum.pdf" download style={{textDecoration: "none"}}>
                    <ButtonStyledCV>
                        Download CV
                    </ButtonStyledCV>
                </a>
                
            </ContainerButtons>
        </ContainerHero>
    )
}

export default Hero