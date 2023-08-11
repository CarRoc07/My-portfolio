import { styled } from "styled-components"

const ContainerFooter = styled.div`
    border-top: 1px solid #ccc;
    display: flex;
    padding: 50px 10px;
    align-items: center;
    justify-content: center;
    `

const Title = styled.h2`
    font-weight: 300;

    @media (max-width: 500px) {
        font-size: 1.4rem;
        text-align: center;
    }

    @media (max-width: 400px) {
        font-size: 1.25rem;
        text-align: center;
    }
    ` 

const Name = styled.h3`
    display: inline;
    background: linear-gradient(to bottom right, #db2777, #6366f1);
    -webkit-background-clip: text;
    color: transparent;
`

const Footer = () => {
    return (
        <ContainerFooter>
            <Title>
                <Name>2023</Name> - Hecho por <b>Carlos Stoll</b> 🚀
            </Title>
        </ContainerFooter>
    )
}

export default Footer