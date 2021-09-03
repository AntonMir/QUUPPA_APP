import React, { useContext } from 'react'
// components
import Logo from '@header/elements/Logo.js'
import Nav from '@header/elements/Nav.js'
import User from '@header/elements/User.js'
import LogOutBtn from '@header/elements/LogOutBtn.js'
import SignIn from '@header/elements/SignIn'
import LanguageChanger from '@header/elements/langChange/LangChanger.js'
import RequestDemo from '@header/elements/RequestDemo.js'
import Search from '@header/elements/Search.js'
import BurgerBtn from '@header/elements/BurgerBtn.js'
// context
import { AuthContext } from '@src/context/AuthContext.js'
// styles
import styled from 'styled-components'

const Header = () => {
    const auth = useContext(AuthContext)

    if (auth.isAuthenticated) {
        return (
            <HeaderStyled>
                <HeaderElWrapper>
                    <Logo />
                    <Nav />
                    <User />
                    <LogOutBtn />
                    <LanguageChanger />
                    {/* <RequestDemo /> */}
                    {/* <Search /> */}
                    <BurgerBtn />
                </HeaderElWrapper>
            </HeaderStyled>
        )
    }

    return (
        <HeaderStyled>
            <HeaderElWrapper>
                <Logo />
                <Nav />
                <SignIn />
                <LanguageChanger />
                {/* <RequestDemo /> */}
                {/* <Search /> */}
                <BurgerBtn />
            </HeaderElWrapper>
        </HeaderStyled>
    )
}

export default Header

const HeaderStyled = styled.div`
    position: sticky;
    top: 0;
    z-index: 999;
    margin: 0;
    padding: 0;
    background-color: #091f2c;
`

const HeaderElWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    max-width: 1440px;
    margin: 0 auto;

    @media (max-width: 1600px) {
        max-width: 1140px;
    }
    @media (max-width: 1200px) {
        max-width: 960px;
    }
    @media (max-width: 1024px) {
        max-width: 690px;
        padding: 0 5%;
    }
    @media (max-width: 800px) {
        padding: 0 8%;
    }
`
