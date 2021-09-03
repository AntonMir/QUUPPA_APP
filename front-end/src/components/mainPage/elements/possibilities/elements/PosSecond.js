import React from 'react'
// img
import womanCar from '@img/mainPage/possibilities/womancar.jpg'
// styled
import styled from 'styled-components'

export default function PosSecond() {
    return (
        <PosSecondStyled>
            <Ul>
                <li>Возможность подписывания фото и видео, сделанных на смартфоне.</li>
                <li>Защита от вскрытия (устройство блокируется и отправляет соответствующую информацию об этом).</li>
                <li>Передача данных в страховую компанию в автоматическом режиме.</li>
                <li>
                    Легкая установка (двухсторонний скотч),позволяющая установить устройство любому человеку за 5 минут.
                </li>
                <li>Ориентировочная стоимость при массовом производстве 500 рублей.</li>
            </Ul>

            <Illustration>
                <Img src={womanCar} alt="girl" />
            </Illustration>
        </PosSecondStyled>
    )
}
const PosSecondStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin-bottom: 50px;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`

const Ul = styled.ul`
    max-width: 49%;
    & > li {
        font-size: calc(0.3vw + 15px);
        color: #091f2c;
        max-width: 100%;
        margin: 0 0 10px 0;
        list-style-type: disc !important;
    }

    @media (max-width: 1024px) {
        max-width: 100%;
        margin-bottom: 30px;
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
