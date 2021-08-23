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
    margin: 80px auto 0;
    padding: 0;
`
