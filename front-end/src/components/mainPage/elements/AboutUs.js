import React from 'react'
// img
import womanCar from '@img/mainPage/aboutUs/womanCar.jpg'
// styled
import styled from 'styled-components'

export default function AboutUs() {
    return (
        <PosFirstStyledWrapper>
            <PosFirstStyled>

                <Text>
                    <h1>О нас</h1>
                    <p>
                        Наш компания заявила о себе еще в 2014 году.<br/>

                        заинтересовал наш продуктесли Вас заинтересовал наш 
                        продуктесли Вас заинтересовал наш продуктесли Вас 
                        заинтересовал наш продуктесли Вас заинтересовал наш 
                        продуктесли Вас заинтересовал наш продуктесли Вас 
                        заинтересовал наш продуктесли Вас заинтересовал наш 
                        продуктесли Вас заинтересовал наш продуктесли Вас 
                        заинтересовал наш
                    </p>
                </Text>
                

                <Illustration>
                    <Img src={womanCar} alt="womanCar" />
                </Illustration>

            </PosFirstStyled>
        </PosFirstStyledWrapper>
    )
}

const PosFirstStyledWrapper = styled.div`
`

const PosFirstStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0;
    max-width: 1440px;
    max-width: 1440px;
    margin: 0 auto 50px;
`

const Text = styled.div`
    max-width: 45%;
    & > h1 {
        text-align: center;
        font-size: calc(1vw + 20px);
        font-weight: bold;
        color: #091f2c;
        max-width: 100%;
    }
    & > p {
        text-indent: 20px;
        font-size: calc(0.5vw + 10px);
        margin: 0;
    }
`

const Illustration = styled.div`
    display: flex;
    align-items: center;
    max-width: 45%;
`

const Img = styled.img`
    max-width: 100%;
`
