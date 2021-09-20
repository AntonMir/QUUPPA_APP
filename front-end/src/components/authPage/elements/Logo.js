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
    position: relative;
    flex: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    text-decoration: none;
    user-select: none;
    height: 80px;
`

const IMG = styled.img`
    width: auto;
    height: 75%;
`
