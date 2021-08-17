import React from 'react'
// components
import Tablet from '@mainPage/elements/Tablet.js'
// styled
import styled from 'styled-components'

export default function WelcomePage() {
    return (
        <Main>
            <Tablet />
        </Main>
    )
}

const Main = styled.div`
    margin: 80px auto 0;
    padding: 0;
    max-width: 1440px;
    height: 1800px;
`
