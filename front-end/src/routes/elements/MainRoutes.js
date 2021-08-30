import React from 'react'
// routes
import { Route, Redirect } from 'react-router-dom'
// components
import MainPage from '@mainPage/MainPage.js'
import UserPage from '@userPage/UserPage.js'
import Header from '@header/Header.js'
import Footer from '@footer/Footer.js'

const MainRoutes = () => {
    return (
        <>
            <Header />
            <Route exact path="/" component={MainPage} />
            <Route exact path="/user" component={UserPage} />
            <Redirect to="/" />
            <Footer />
        </>
    )
}

export default MainRoutes
