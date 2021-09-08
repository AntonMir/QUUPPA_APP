import React from 'react'
// img
import phoneNavImg from '@img/mainPage/welcomeSection/phoneNavImg.png'
// styled
import styled from 'styled-components'

export default function WelcomeSection() {
    return (
        <WelcomeSectionStyled>
            <Text>
                <h1> Умное страхование</h1>
                <p>
                    Устройство позволяет страховым компаниям предоставлять клиентам скидки на КАСКО по таким параметрам
                    как стиль вождения, пробег, сезонность.
                </p>
                <br />
                <p>
                    А также использовать варианты страховки по принципу ”Pay as you go” без установки дорогостоящего
                    дополнительного оборудования в автомобиль. Вся обработка данных, а также их передача в страховую
                    компанию в защищенном режиме производится с помощью смартфона водителя.
                </p>
            </Text>

            <Illustration>
                <Img src={phoneNavImg} alt="phone" />
            </Illustration>
        </WelcomeSectionStyled>
    )
}

const WelcomeSectionStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin-bottom: 50px;

    @media (max-width: 991px) {
        flex-direction: column;
    }
`

const Text = styled.div`
    max-width: 49%;
    & > h1 {
        font-size: calc(2vw + 20px);
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

    @media (max-width: 991px) {
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

    @media (max-width: 991px) {
        max-width: 100%;
    }
`

const Img = styled.img`
    width: 100%;
`
