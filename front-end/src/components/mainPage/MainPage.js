import React from 'react'
// components
import Tablet from '@mainPage/elements/Tablet.js'
import WelcomeSection from '@mainPage/elements/WelcomeSection.js'
import Possibilities from '@mainPage/elements/possibilities/Possibilities.js'
import AboutUs from '@mainPage/elements/AboutUs.js'
import FeedbackForm from '@mainPage/elements/FeedbackForm.js'
// styled
import styled from 'styled-components'

export default function MainPage() {
    return (
        <Main>
            <Tablet />
            <WelcomeSection />
            <Possibilities />
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
    }
    @media (max-width: 1024px) {
        max-width: 690px;
        padding: 0 5%;
    }
    @media (max-width: 800px) {
        padding: 0 8%;
    }
`
