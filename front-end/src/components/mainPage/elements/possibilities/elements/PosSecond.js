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
    align-items: center;
`

const Ul = styled.ul`
    max-width: 45%;
    & > li {
        font-size: calc(0.5vw + 10px);
        color: #091f2c;
        max-width: 100%;
        margin: 0 0 10px 0;
        list-style-type: disc !important;
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
