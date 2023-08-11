import { styled } from "styled-components"

const ContainerGeneral = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    margin-bottom: 90px;
`

const Title = styled.h2`
    font-size: 2.2rem;
    `

const ContainerSkills = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    @media (max-width: 570px) {
        gap: 9px;
    }

    @media (max-width: 380px) {
        flex-wrap: wrap-reverse;
        gap: 5px;
    }
    `

const ImgSkill = styled.img`
    width: 100px;
    transition: all 0.4s ease-in-out;

    &:hover {
        scale: 1.2;
    }

    @media (max-width: 550px) {
        width: 75px;
    }

    @media (max-width: 420px) {
        width: 65px;
    }
    `

const Skills = () => {
    return (
        <ContainerGeneral id="skillsSection">
            <Title>Skills</Title>
            <ContainerSkills>
                <ImgSkill src="/html.png" />
                <ImgSkill src="/css.png" />
                <ImgSkill src="/js.png" />
                <ImgSkill src="/react.png" />
                <ImgSkill src="/node.png" />
            </ContainerSkills>
            <ContainerSkills>
                <ImgSkill src="/express.png" />
                <ImgSkill src="/mysql.png" />
                <ImgSkill src="/postgrest.png" />
                <ImgSkill src="/mongo.webp" />
            </ContainerSkills>
        </ContainerGeneral>
    )
}

export default Skills