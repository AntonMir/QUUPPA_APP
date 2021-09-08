import React from 'react'
// styled
import styled from 'styled-components'

export default function Advantages() {
    return (
        <AdvantagesStyled>
            <AdvantagesEl>
                <Text>
                    <h1>Наши преимущества</h1>
                    <ul>
                        <li>a. «Нет телефона – нет проблем»</li>
                        <li>b. «Нет GPS – нет проблем»</li>
                        <li>c. «Кончилась память – нет проблем»</li>
                    </ul>
                </Text>
                <Illustration>
                    <Img src="http://placehold.it/550x300" alt="Possibilities" />
                </Illustration>
            </AdvantagesEl>
        </AdvantagesStyled>
    )
}

const AdvantagesStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    margin-bottom: 50px;
`
const AdvantagesEl = styled.div`
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
