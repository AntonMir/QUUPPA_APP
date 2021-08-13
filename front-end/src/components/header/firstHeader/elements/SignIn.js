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
    return <CustomLink to="/auth">Sign In</CustomLink>
}

const CustomLink = styled(Link)`
    margin: 0 60px 0px 10px;
    color: #000;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    &:hover {
        border-bottom: 1px #000 solid;
    }
`
