import React from 'react'
// img
import womanCar from '@img/mainPage/aboutUs/womanCar.jpg'
// styled
import styled from 'styled-components'

export default function AboutUs() {
    return (
        <PosFirstStyled>
            <Text>
                <h1>О нас</h1>
                <p>
                    Наш компания заявила о себе еще в 2014 году.
                    <br />
                    заинтересовал наш продуктесли Вас заинтересовал наш продуктесли Вас заинтересовал наш продуктесли
                    Вас заинтересовал наш продуктесли Вас заинтересовал наш продуктесли Вас заинтересовал наш
                    продуктесли Вас заинтересовал наш продуктесли Вас заинтересовал наш продуктесли Вас заинтересовал
                    наш продуктесли Вас заинтересовал наш
                </p>
            </Text>

            <Illustration>
                <Img src={womanCar} alt="womanCar" />
            </Illustration>
        </PosFirstStyled>
    )
}

const PosFirstStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin-bottom: 50px;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`

const Text = styled.div`
    max-width: 49%;
    & > h1 {
        font-size: calc(1.5vw + 20px);
        font-weight: bold;
        margin: 0 0 20px 0;
        color: #091f2c;
        max-width: 100%;
    }
    & > p {
        font-size: calc(0.3vw + 15px);
        max-width: 90%;
        margin: 0;
    }

    @media (max-width: 1024px) {
        max-width: 100%;
        margin-bottom: 30px;

        & > p {
            max-width: 100%;
        }
    }
`

const Illustration = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 49%;

    @media (max-width: 1024px) {
        max-width: 100%;
    }
`

const Img = styled.img`
    width: 100%;
`
