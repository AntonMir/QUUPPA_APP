import React from 'react'
// styled
import styled from 'styled-components'

export default function Possibilities() {
    return (
        <PossibilitiesStyled>
            <Possibility>
                <Text>
                    <h1>Возможности</h1>
                    <ul>
                        <li>a. Запись поездок</li>
                        <li>b. Отсылка поездок на сервер</li>
                        <li>c. Анализ поездок</li>
                        <li>d. Работа без потери данных</li>
                    </ul>
                </Text>
                <Illustration>
                    <Img src="https://via.placeholder.com/550x300" alt="Possibilities" />
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
const Text = styled.div`
    margin-top: 30px;
    & > h1 {
        font-size: calc(2vw + 20px);
        font-weight: bold;
        margin: 0 0 20px 0;
        color: #091f2c;
        max-width: 100%;
    }

    & > ul {
        & > li {
            font-size: calc(0.3vw + 15px);
            color: #091f2c;
            margin: 0 0 10px 0;
            list-style-type: disc !important;
        }

        @media (max-width: 991px) {
            margin-bottom: 30px;
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
