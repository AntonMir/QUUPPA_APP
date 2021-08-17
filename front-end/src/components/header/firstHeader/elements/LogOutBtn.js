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
            Exit
        </CustomLink>
    )
}

const CustomLink = styled(Link)`
    padding: 10px 40px 10px 0;
    margin: 0 0 0 20px;
    color: #000;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
`
