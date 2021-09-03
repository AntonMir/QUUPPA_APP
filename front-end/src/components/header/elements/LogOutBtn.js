import { useContext } from 'react'
// context
import { AuthContext } from '@src/context/AuthContext.js'
// Link
import { Link } from 'react-router-dom'
// styled
import styled from 'styled-components'

export default function LogOutBtn() {
    const auth = useContext(AuthContext)

    return (
        <CustomLink to="/" onClick={auth.logout}>
            Выход
        </CustomLink>
    )
}

const CustomLink = styled(Link)`
    margin: 0 40px 0 20px;
    color: #fff;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;

    @media (max-width: 1024px) {
        display: none;
    }
`
