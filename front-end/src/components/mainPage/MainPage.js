import React from 'react'
// components
import Tablet from '@tablet/Tablet.js'
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
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 80px 0 0 0;
    padding: 0;
    height: 1800px;
`
