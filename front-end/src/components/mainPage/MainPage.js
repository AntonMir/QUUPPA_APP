import React from 'react'
// components
import Tablet from '@mainPage/elements/Tablet.js'
import Greeting from '@mainPage/elements/Greeting.js'
import Greeting2 from '@mainPage/elements/Greeting2.js'
import Possibilities from '@mainPage/elements/Possibilities.js'
import Possibilities2 from '@mainPage/elements/Possibilities2.js'
import Mechanism from '@mainPage/elements/Mechanism.js'
import Advantages from '@mainPage/elements/Advantages.js'
import AboutUs from '@mainPage/elements/AboutUs.js'
import FeedbackForm from '@mainPage/elements/FeedbackForm.js'
// styled
import styled from 'styled-components'

export default function MainPage() {
    return (
        <Main>
            <Tablet />
            <Greeting />
            <Greeting2 />
            <Possibilities />
            <Possibilities2 />
            <Mechanism />
            <Advantages />
            <AboutUs />
            <FeedbackForm />
        </Main>
    )
}

const Main = styled.div`
    margin: 50px auto 0;
    padding: 0;
    max-width: 1440px;

    @media (max-width: 1600px) {
        max-width: 1140px;
    }
    @media (max-width: 1200px) {
        max-width: 960px;
        padding: 0 2%;
    }
    @media (max-width: 991px) {
        max-width: 750px;
    }
    @media (max-width: 800px) {
        padding: 0 8%;
    }
`
