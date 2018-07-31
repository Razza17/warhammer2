import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { fakeAuth } from "./components/home/Login";

import { Home } from "./pages/Home";
import Logup from "./components/home/Logup";
import Login from "./components/home/Login";
import { CreationProfile } from "./pages/CreationProfile";
import { CreationCarac } from "./pages/CreationCarac";
import { CreationComp } from "./pages/CreationComp";
import { CreationArme } from "./pages/CreationArme";
import { CreationInventaire } from "./pages/CreationInventaire";
import { Personnage } from "./pages/Personnage";
import { Equipement } from "./pages/Equipement";
import { Combat } from "./pages/Combat";
import { Update } from "./pages/Update";
import { Recap } from "./pages/Recap";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/logup' component={Logup}/>
      <Route path='/login' component={Login}/>
      <Route path='/creationProfile' component={CreationProfile}/>
      <Route path='/creationCarac' component={CreationCarac}/>
      <Route path='/creationComp' component={CreationComp}/>
      <Route path='/creationArme' component={CreationArme}/>
      <Route path='/creationInventaire' component={CreationInventaire}/>
      <Route path='/recap' component={Recap}/>
      <PrivateRoute authed={fakeAuth.isAuthenticated} path='/personnage' component={Personnage}/>
      <PrivateRoute authed={fakeAuth.isAuthenticated} path='/equipement' component={Equipement}/>
      <PrivateRoute authed={fakeAuth.isAuthenticated} path='/combat' component={Combat}/>
      <PrivateRoute authed={fakeAuth.isAuthenticated} path='/update' component={Update}/>
    </Switch>
  </main>
);

const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
      : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
  )
};

export default Main;
