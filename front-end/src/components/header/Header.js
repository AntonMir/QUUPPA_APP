import React from 'react'
// components
import FirstHeader from '@header/firstHeader/FirstHeader.js'
import SecondHeader from '@header/secondHeader/SecondHeader.js'
// styles
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderStyled>
            <FirstHeader />
            <SecondHeader />
        </HeaderStyled>
    )
}

export default Header

const HeaderStyled = styled.div`
    position: sticky;
    top: 0;
`
