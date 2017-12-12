import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from "./pages/Home";
import Logup from "./components/home/Logup";
import Login from "./components/home/Login";
import { Creation } from "./pages/Creation";
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
            <Route path='/creation' component={Creation}/>
            <Route path='/recap' component={Recap}/>
            <Route path='/personnage' component={Personnage}/>
            <Route path='/equipement' component={Equipement}/>
            <Route  path='/combat' component={Combat}/>
            <Route path='/update' component={Update}/>
        </Switch>
    </main>
);

export default Main;
