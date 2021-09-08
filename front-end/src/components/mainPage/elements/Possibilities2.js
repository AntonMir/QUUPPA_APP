import React from 'react'
// img
import womanCar from '@img/mainPage/possibilities/womancar.jpg'
import graph from '@img/mainPage/possibilities/graph.png'
// styled
import styled from 'styled-components'

export default function Possibilities2() {
    return (
        <PossibilitiesStyled>
            <Possibility>
                <Ul>
                    <li>
                        Устройство крепиться на стекло автомобиля, имеет на борту акселерометр, память, встроенный
                        источник питания, модуль Bluetooth и компонент для подписи данных (некорректируемость).
                    </li>
                    <li>Для передачи данных на сервер используется смартфон водителя.</li>
                    <li>Передача данных в страховую компанию в автоматическом режиме.</li>
                    <li>
                        Встроенный элемент питания позволяет устройству работать в течение года (при среднем времени
                        поездок 3-5 часов в день).
                    </li>
                    <li>
                        Автоматическое определение начала и конца поездки, стиля вождения, сохранение данных в памяти до
                        передачи на сервер.
                    </li>
                </Ul>

                <Illustration>
                    <Img src={graph} alt="graph" />
                </Illustration>
            </Possibility>

            <Possibility>
                <Ul>
                    <li>Возможность подписывания фото и видео, сделанных на смартфоне.</li>
                    <li>
                        Защита от вскрытия (устройство блокируется и отправляет соответствующую информацию об этом).
                    </li>
                    <li>Передача данных в страховую компанию в автоматическом режиме.</li>
                    <li>
                        Легкая установка (двухсторонний скотч),позволяющая установить устройство любому человеку за 5
                        минут.
                    </li>
                    <li>Ориентировочная стоимость при массовом производстве 500 рублей.</li>
                </Ul>

                <Illustration>
                    <Img src={womanCar} alt="girl" />
                </Illustration>
            </Possibility>
        </PossibilitiesStyled>
    )
}

const PossibilitiesStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    margin-bottom: 50px;
`
const Possibility = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin-bottom: 50px;

    @media (max-width: 991px) {
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

    @media (max-width: 991px) {
        max-width: 100%;
        margin-bottom: 30px;
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
