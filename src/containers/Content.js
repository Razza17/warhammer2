import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {Home} from "../components/home/Home";
import {Personnage} from "../pages/Personnage";
import {Equipement} from "../pages/Equipement";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/personnage' component={Personnage}/>
            <Route path='/equipement' component={Equipement}/>
        </Switch>
    </main>
);

export default Main;
