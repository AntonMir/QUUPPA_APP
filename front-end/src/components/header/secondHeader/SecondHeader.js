// components
import Logo from '@header/secondHeader/elements/Logo.js'
import Nav from '@header/secondHeader/elements/Nav.js'
import RequestDemo from '@header/secondHeader/elements/RequestDemo.js'
import Search from '@header/secondHeader/elements/Search.js'
// import Search from '@header/secondHeader/elements/Search.js'
// styles
import styled from 'styled-components'

export default function SecondHeader() {
    return (
        <SecondHeaderStyled>
            <SecondHeaderElWrapper>
                <Logo />
                <Nav />
                <RequestDemo />
                <Search />
            </SecondHeaderElWrapper>
        </SecondHeaderStyled>
    )
}

const SecondHeaderStyled = styled.div`
    background-color: #091f2c;
`

const SecondHeaderElWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    max-width: 1440px;
    margin: 0 auto;
`
