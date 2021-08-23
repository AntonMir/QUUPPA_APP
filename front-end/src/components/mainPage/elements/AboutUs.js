import React from 'react'
// img
import womanCar from '@img/mainPage/aboutUs/womanCar.jpg'
// styled
import styled from 'styled-components'

export default function AboutUs() {
    return (
        <PosFirstStyledWrapper>
            <PosFirstStyled>
                <H1>О нас</H1>
                <P>
                    Наш компания заявила о себе еще в 2014 году.<br/>

                    заинтересовал наш продуктесли Вас заинтересовал наш 
                    продуктесли Вас заинтересовал наш продуктесли Вас 
                    заинтересовал наш продуктесли Вас заинтересовал наш 
                    продуктесли Вас заинтересовал наш продуктесли Вас 
                    заинтересовал наш продуктесли Вас заинтересовал наш 
                    продуктесли Вас заинтересовал наш продуктесли Вас 
                    заинтересовал наш
                </P>

                <Illustration>
                    <Img src={womanCar} alt="womanCar" />
                </Illustration>
            </PosFirstStyled>
        </PosFirstStyledWrapper>
    )
}

const PosFirstStyledWrapper = styled.div`
    background-color: rgba(9, 31, 44, 0.9);
`

const PosFirstStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 0 3% 100px;
    max-width: 1440px;
    margin: 0 auto;
`

const H1 = styled.h1`
    font-size: calc(1vw + 10px);
`

const P = styled.p`
    font-size: calc(0.5vw + 10px);
    max-width: 80%;    
`

const Illustration = styled.div`
    display: flex;
    align-items: center;
    max-width: 45%;
`

const Img = styled.img`
    max-width: 100%;
`
