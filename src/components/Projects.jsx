import { styled } from "styled-components"

const ContainerGeneralProjects = styled.div`
    padding: 10px;
    margin-bottom: 90px;
    `

const TitleProjects = styled.h2`
    font-size: 2.2rem;
    margin-bottom: 15px;
    `

const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr));
    gap: 1.5rem;
    transition: all 0.3s ease;
    `

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.5rem;
    overflow: hidden;
    border-color: #a0aec0;
    border-width: 1px;
    border-style: solid;
    gap: 10px;
    background: #333232;
    `

const ImgProject = styled.img`
    display: block;
    width: 100%;
    height: 230px;
    `

const ContainerDescProject = styled.div`
    width: 90%;
    padding: 10px 10px;
    `

const ContainerInfoCode = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    `

const ImgProfileGithub = styled.img`
    width: 50px;
    border-radius: 50%;
    `


const Projects = () => {
    return (
        <ContainerGeneralProjects id="projectsSection">
            <TitleProjects>Projects</TitleProjects>
            <ContainerGrid>
                <ProjectContainer>
                    <ImgProject src="/ecommerce.PNG" alt="IMG OF PROJECT" />
                    <ContainerDescProject>
                        <h3>E-Commerce</h3>
                        <p>Descubre TSTORE: mi apasionante proyecto de eCommerce, donde la tecnología y la innovación se encuentran para ofrecerte productos electrónicos de primera calidad.</p>
                    </ContainerDescProject>
                    <ContainerInfoCode>
                        <a href="https://github.com/CarRoc07" target="_blank" rel="noreferrer"><ImgProfileGithub src="/perfil.jpg" alt="IMG Profile"/></a>
                        <a href="https://github.com/CarRoc07/FS-Ecommerce" target="_blank" rel="noreferrer" style={{color: "#6366f1"}}>Code</a>
                    </ContainerInfoCode>
                </ProjectContainer>
                <ProjectContainer>
                    <ImgProject src="/TicTacToe.PNG" alt="IMG Profile" />
                    <ContainerDescProject>
                        <h3>Tic Tac Toe</h3>
                        <p>Explora mi proyecto de juego Tic Tac Toe: diversión sin fin y desafíos estratégicos en la palma de tu mano</p>
                    </ContainerDescProject>
                    <ContainerInfoCode>
                        <a href="https://github.com/CarRoc07" target="_blank" rel="noreferrer"><ImgProfileGithub src="/perfil.jpg" alt="IMG Profile"/></a> 
                        <a href="https://github.com/CarRoc07/TaTeTi" target="_blank" rel="noreferrer" style={{color: "#6366f1"}}>Code</a>
                    </ContainerInfoCode>
                </ProjectContainer>
                <ProjectContainer>
                    <ImgProject src="/Portfolio.PNG" alt="IMG Profile" />
                    <ContainerDescProject>
                        <h3>Portfolio</h3>
                        <p>Explorá el codigo de esté portfolio!</p>
                    </ContainerDescProject>
                    <ContainerInfoCode>
                        <a href="https://github.com/CarRoc07" target="_blank" rel="noreferrer"><ImgProfileGithub src="/perfil.jpg" alt="IMG Profile"/></a> 
                        <a href="https://github.com/CarRoc07/My-portfolio" target="_blank" rel="noreferrer" style={{color: "#6366f1"}}>Code</a>
                    </ContainerInfoCode>
                </ProjectContainer>
                <ProjectContainer>
                    <ImgProject src="/generator.PNG" alt="IMG Profile" />
                    <ContainerDescProject>
                        <h3>Password generator</h3>
                        <p>Utilizá esta app para generar tus passwords más seguras!</p>
                    </ContainerDescProject>
                    <ContainerInfoCode>
                        <a href="https://github.com/CarRoc07" target="_blank" rel="noreferrer"><ImgProfileGithub src="/perfil.jpg" alt="IMG Profile"/></a> 
                        <a href="https://github.com/CarRoc07/Password-generator" target="_blank" rel="noreferrer" style={{color: "#6366f1"}}>Code</a>
                    </ContainerInfoCode>
                </ProjectContainer>
            </ContainerGrid>
        </ContainerGeneralProjects>
    )
}

export default Projects