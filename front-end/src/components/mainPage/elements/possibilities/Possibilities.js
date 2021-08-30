import React from 'react'
// components
import PosFirst from '@mainPage/elements/possibilities/elements/PosFirst.js'
import PosSecond from '@mainPage/elements/possibilities/elements/PosSecond.js'
// styled
import styled from 'styled-components'

export default function Possibilities() {
    return (
        <PossibilitiesStyled>
            <PosFirst />
            <PosSecond />
        </PossibilitiesStyled>
    )
}

const PossibilitiesStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    max-width: 1440px;
    margin: 0 auto 50px;
`
