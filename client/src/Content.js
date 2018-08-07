import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
import { Recap } from "./pages/Recap";
import { ChoosePerso } from "./pages/ChoosePerso";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/logup' component={Logup}/>
      <Route path='/login' component={Login}/>
      <Route path='/choosePerso' component={ChoosePerso}/>
      <Route path='/creationProfile' component={CreationProfile}/>
      <Route path='/creationCarac' component={CreationCarac}/>
      <Route path='/creationComp' component={CreationComp}/>
      <Route path='/creationArme' component={CreationArme}/>
      <Route path='/creationInventaire' component={CreationInventaire}/>
      <Route path='/recap' component={Recap}/>
      <Route path='/personnage' component={Personnage}/>
      <Route path='/equipement' component={Equipement}/>
      <Route  path='/combat' component={Combat}/>
    </Switch>
  </main>
);

export default Main;
