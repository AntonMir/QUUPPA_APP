// Link
import { Link } from 'react-router-dom'
// redux
// import { store } from '@store/store.js'
// import { changeAuthPageChosenForm } from '@store/actions.js'
// styled
import styled from 'styled-components'

// const goToAuthPageLogin = () => {
//     store.dispatch(changeAuthPageChosenForm('login'))
// }

// const goToAuthPageRegister = () => {
//     store.dispatch(changeAuthPageChosenForm('register'))
// }

export default function SignIn() {
    return (
        <CustomLinkWrapper>
            <CustomLink to="/auth">Вход / Регистрация</CustomLink>
        </CustomLinkWrapper>
    )
}

const CustomLink = styled(Link)`
    display: flex;
    align-items: center;
    height: 100%;
    color: #fff;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;

    @media (max-width: 991px) {
        color: #000;
    }
`
const CustomLinkWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0 45px 0px 10px;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    height: 80px;

    &:before,
    &:after {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        border-bottom: 7px solid #091f2c;
        content: '';
        transition: all 0.3s ease;
    }
    &:hover {
        &:before,
        &:after {
            width: 60%;
            border-bottom: 7px solid #00b5d6;
        }
        &:after {
            transform: translateX(-98%);
        }
    }

    @media (max-width: 991px) {
        margin: 0;

        &:before,
        &:after {
            display: none;
        }
    }
`
