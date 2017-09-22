import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {Home} from "../components/Home";
import {Personnage} from "../pages/Personnage";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/personnage' component={Personnage}/>
        </Switch>
    </main>
);

export default Main;