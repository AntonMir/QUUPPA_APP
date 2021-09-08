import React from 'react'
// img
// import phoneNavImg from '@img/mainPage/welcomeSection/phoneNavImg.png'
// styled
import styled from 'styled-components'

export default function Greeting() {
    return (
        <GreetingStyled>
            <Text>
                <h1>AVITELMA</h1>
                <h3>Прозрачность для клиентов. Простота и экономия для бизнеса</h3>
            </Text>

            <Illustration>
                <Img src="http://placehold.it/550x300" alt="greeting" />
            </Illustration>
        </GreetingStyled>
    )
}

const GreetingStyled = styled.div`
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
    margin-top: 30px;
    & > h1 {
        font-size: calc(2vw + 20px);
        font-weight: bold;
        margin: 0 0 20px 0;
        color: #091f2c;
        max-width: 100%;
    }
    & > h3 {
        font-size: calc(1.5vw + 15px);
        margin: 0;
        color: #091f2c;
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
