// Link
import { Link } from 'react-router-dom'
// img
import logo from '@img/header/logo.png'
// styles
import styled from 'styled-components'

export default function Logo() {
    return (
        <CustomLink to="/">
            <IMG src={logo} alt="logo" />
        </CustomLink>
    )
}

const CustomLink = styled(Link)`
    flex: 0;
    display: flex;
    align-items: center;
    padding: 0;
    text-decoration: none;
    user-select: none;
    height: 80px;

    @media (max-width: 1024px) {
        height: 75px;
    }
    @media (max-width: 800px) {
        height: 70px;
    }
    @media (max-width: 600px) {
        height: 65px;
    }
`

const IMG = styled.img`
    width: auto;
    height: 45%;
    margin-right: 10px;

    @media (max-width: 1024px) {
        height: 42%;
    }
    @media (max-width: 800px) {
        height: 39%;
    }
    @media (max-width: 600px) {
        height: 36%;
    }
`
