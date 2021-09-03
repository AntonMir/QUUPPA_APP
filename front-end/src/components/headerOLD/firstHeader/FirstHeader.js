import { useContext } from 'react'
// components
import Nav from '@header/firstHeader/elements/Nav.js'
import User from '@header/firstHeader/elements/User.js'
import LogOutBtn from '@header/firstHeader/elements/LogOutBtn.js'
import SignIn from '@header/firstHeader/elements/SignIn'
import LanguageChanger from '@header/firstHeader/elements/langChange/LangChanger.js'

// context
import { AuthContext } from '@src/context/AuthContext.js'
// styles
import styled from 'styled-components'

export default function FirstHeader() {
    const auth = useContext(AuthContext)

    if (auth.isAuthenticated) {
        return (
            <FirstHeaderWrapper>
                <FirstHeaderStyled>
                    <Nav />
                    <User />
                    <LogOutBtn />
                    <LanguageChanger />
                </FirstHeaderStyled>
            </FirstHeaderWrapper>
        )
    }

    return (
        <FirstHeaderWrapper>
            <FirstHeaderStyled>
                <Nav />
                <SignIn />
                <LanguageChanger />
            </FirstHeaderStyled>
        </FirstHeaderWrapper>
    )
}

const FirstHeaderWrapper = styled.div`
    background-color: #fff;
`

const FirstHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
    height: 30px;
    padding: 0;
    z-index: 999;
    font-weight: 500;
    max-width: 1440px;
    margin: 0 auto;
`
