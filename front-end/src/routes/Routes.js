import React from 'react'
// routes
import { Switch, Route } from 'react-router-dom'
// components
import MainRoutes from '@routes/elements/MainRoutes.js'
import AuthPage from '@authPage/AuthPage.js'

const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        // это для человека, который зашел в систему
        return (
            <Switch>
                <Route component={MainRoutes} />
                {/* <Route exact path="/user" component={UserRoutes} /> */}
            </Switch>
        )
    }

    return (
        <Switch>
            <Route exact path="/auth" component={AuthPage} />
            <Route component={MainRoutes} />
        </Switch>
    )
}

export default useRoutes
