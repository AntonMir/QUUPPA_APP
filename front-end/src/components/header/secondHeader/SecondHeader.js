// components
import Logo from '@header/secondHeader/elements/Logo.js'
import Nav from '@header/secondHeader/elements/Nav.js'
// import Search from '@header/secondHeader/elements/Search.js'
// styles
import styled from 'styled-components'

export default function SecondHeader() {
    return (
        <SecondHeaderStyled>
            <Logo />
            <Nav />
            {/* <Search /> */}
        </SecondHeaderStyled>
    )
}

const SecondHeaderStyled = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    background-color: #091f2c;
    padding: 0 3%;
`
