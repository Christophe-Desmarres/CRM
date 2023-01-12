import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {Home} from '../pages/home';
import {Profile} from '../pages/profil';


export const index = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Redirect to="/" />
        </Switch>
        </Router>
    )
}