import React from 'react'
// img
import graph from '@img/mainPage/possibilities/graph.png'
// styled
import styled from 'styled-components'

export default function PosFirst() {
    return (
        <PosFirstStyled>
            <Ul>
                <li>
                    Устройство крепиться на стекло автомобиля, имеет на борту акселерометр, память, встроенный источник
                    питания, модуль Bluetooth и компонент для подписи данных (некорректируемость).
                </li>
                <li>Для передачи данных на сервер используется смартфон водителя.</li>
                <li>Передача данных в страховую компанию в автоматическом режиме.</li>
                <li>
                    Встроенный элемент питания позволяет устройству работать в течение года (при среднем времени поездок
                    3-5 часов в день).
                </li>
                <li>
                    Автоматическое определение начала и конца поездки, стиля вождения, сохранение данных в памяти до
                    передачи на сервер.
                </li>
            </Ul>

            <Illustration>
                <Img src={graph} alt="graph" />
            </Illustration>
        </PosFirstStyled>
    )
}

const PosFirstStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 100px 0;
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
