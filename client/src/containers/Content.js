import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { fakeAuth } from "../pages/Login";

import { Home } from "../pages/Home";
import Logup from "../pages/Logup";
import Login from "../pages/Login";
import Creation from "../pages/Creation";
import { Personnage } from "../pages/Personnage";
import { Equipement } from "../pages/Equipement";
import { Combat } from "../pages/Combat";
import { Update } from "../pages/Update";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/logup' component={Logup}/>
            <Route path='/login' component={Login}/>
            <Route path='/creation' component={Creation}/>
            <PrivateRoute authed={fakeAuth.isAuthenticated} path='/personnage' component={Personnage}/>
            <PrivateRoute authed={fakeAuth.isAuthenticated} Route path='/equipement' component={Equipement}/>
            <PrivateRoute authed={fakeAuth.isAuthenticated} Route path='/combat' component={Combat}/>
            <PrivateRoute authed={fakeAuth.isAuthenticated} Route path='/update' component={Update}/>
        </Switch>
    </main>
);

const PrivateRoute = ({component: Component, authed, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/', state: {from: props.location}}} />} />
    )
};

export default Main;
