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
            <FirstHeaderStyled>
                <Nav />
                <User />
                <LogOutBtn />
                <LanguageChanger />
            </FirstHeaderStyled>
        )
    }

    return (
        <FirstHeaderStyled>
            <Nav />
            <SignIn />
            <LanguageChanger />
        </FirstHeaderStyled>
    )
}

const FirstHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
    background-color: #fff;
    height: 30px;
    padding: 0 3%;
    z-index: 999;
    font-weight: 500;
`
