import React from 'react'
// img
import phoneNavImg from '@img/mainPage/welcomeSection/phoneNavImg.png'
// styled
import styled from 'styled-components'

export default function WelcomeSection() {
    return (
        <WelcomeSectionWrapper>
            <WelcomeSectionStyled>
                <Text>
                    <h1> Умное страхование</h1>
                    <p>
                        Устройство позволяет страховым компаниям предоставлять клиентам скидки на КАСКО по таким параметрам
                        как стиль вождения, пробег, сезонность.
                    </p>
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
        </WelcomeSectionWrapper>
    )
}

const WelcomeSectionWrapper = styled.div`
    // background-color: rgba(255, 255, 255, 0.8);
`

const WelcomeSectionStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 3%;
    max-width: 1440px;
    max-width: 1440px;
    margin: 0 auto 50px;
`

const Text = styled.div`
    max-width: 45%;
    & > h1 {
        font-size: calc(2vw + 20px);
        font-weight: bold;
        color: #091f2c;
        max-width: 100%;
    }
    & > p {
        text-indent: 20px;
        font-size: calc(0.5vw + 10px);
        max-width: 90%;
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
