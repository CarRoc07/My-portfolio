/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
import { styled } from "styled-components"

const NavStyled = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    margin-bottom: 90px;

    @media (max-width: 800px) {
        width: 97%;
    }

    @media (max-width: 550px) {
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        gap: 16px;
        padding: 10px 0px;
    }

    @media (max-width: 400px) {
        margin-bottom: 40px;
    }
    `

const LiStyled = styled.li`
    list-style: none;
    cursor: pointer;
    `

const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0px;
    width: 40%;

    @media (max-width: 550px) {
        width: 70%;
    }

    @media (max-width: 500px) {
        width: 90%;
        padding: 0px;
        margin: 0 auto;
    }
    `

const LogoStyled = styled.h2`
    background: linear-gradient(to bottom right, #db2777, #6366f1);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 3rem;
    font-weight: 800;

    @media (max-width: 500px) {
        font-size: 2.75rem;
        width: auto;
    }
    `

const Navbar = () => {
    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <NavStyled>
            <LogoStyled>{"<CS/>"}</LogoStyled>
            <NavList>
                <LiStyled >About</LiStyled>
                <LiStyled onClick={() => handleScrollToSection("projectsSection")}>Projects</LiStyled>
                <LiStyled onClick={() => handleScrollToSection("skillsSection")}>Skills</LiStyled>
            </NavList>
        </NavStyled>
    )
}

export default Navbar