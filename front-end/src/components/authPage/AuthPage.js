import React, { useState } from 'react'
// conponents
import Login from '@components/authPage/elements/Login.js'
import Register from '@components/authPage/elements/Register.js'
import Logo from '@components/authPage/elements/Logo.js'
// img
import wave from '@img/authPage/wave.svg'
// styled
import styled from 'styled-components'

export default function AuthPage() {
    const [chosenForm, setChosenForm] = useState('login')

    const choseLogin = () => {
        setChosenForm('login')
    }

    const choseRegister = () => {
        setChosenForm('register')
    }

    return (
        <AuthPageStyled>
            <Logo />
            <AuthForms>
                <ButtonsWrapper>
                    <Button
                        style={chosenForm === 'login' ? { borderBottom: 'none', borderRight: 'none' } : {}}
                        onClick={choseLogin}
                    >
                        Вход
                    </Button>
                    <Button
                        style={chosenForm === 'register' ? { borderBottom: 'none', borderLeft: 'none' } : {}}
                        onClick={choseRegister}
                    >
                        Регистрация
                    </Button>
                </ButtonsWrapper>
                {chosenForm === 'login' ? <Login /> : <Register />}
            </AuthForms>
        </AuthPageStyled>
    )
}

const AuthPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0 0 50px 0;
    height: 100vh;
    color: #fff;
    background-color: #091f2c;
    background-image: url(${wave}) !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: 100% auto !important;
`

const AuthForms = styled.div`
    margin: 100px 0 0 0;
    width: calc(300px + 12vw);
`

const ButtonsWrapper = styled.div`
    display: flex;
    margin: 0;
    z-index: 1;
`

const Button = styled.div`
    text-align: center;
    font-style: normal;
    font-weight: 100;
    font-size: 17px;
    cursor: pointer;
    border: 1px #aaa solid;
    padding: 10px 40px;
    flex: 1;
    &:nth-of-type(1) {
        border-radius: 5px 0 5px 0;
        -webkit-border-radius: 5px 0 5px 0;
        -moz-border-radius: 5px 0 5px 0;
        -ms-border-radius: 5px 0 5px 0;
        -o-border-radius: 5px 0 5px 0;
    }
    &:nth-of-type(2) {
        border-radius: 0 5px 0 5px;
        -webkit-border-radius: 0 5px 0 5px;
        -moz-border-radius: 0 5px 0 5px;
        -ms-border-radius: 0 5px 0 5px;
        -o-border-radius: 0 5px 0 5px;
    }
`
