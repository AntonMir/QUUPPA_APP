import React from 'react'
// img
import logoGif from '@img/footer/logoGif.gif'
// styled
import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterStyled>
            <Img src={logoGif} alt="logoGif" />
        </FooterStyled>
    )
}

// const PosFirstStyled = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
//     padding: 0 3%;
//     margin: 0 0 100px 0;
//     border: 1px blue dashed;
// `

// const H1 = styled.h1`
//     font-size: calc(1vw + 10px);
// `

// const P = styled.p`
//     font-size: calc(0.5vw + 10px);
// `

const FooterStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #091F2C;
`

const Img = styled.img`
    width: auto;
    height: 100px;
`
