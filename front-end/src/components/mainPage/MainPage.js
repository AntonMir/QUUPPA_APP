// Link
// import { Link } from 'react-router-dom'
// styled
import styled from 'styled-components'

export default function WelcomePage() {
    return (
        <Main>
            <H1>
                Привет дорогой друг. Тут в перспективе будет главная рекламная страничка. Не расстраивайся пока ее нет.
            </H1>
        </Main>
    )
}

const Main = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
    padding: 0;
    height: calc(100vh - 80px);
`

const H1 = styled.h1`
    text-align: center;
    font-size: 30px;
    margin: 0 10%;
    padding: 50px;
`
