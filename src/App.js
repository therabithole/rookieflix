import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Hamburger from "./components_r/page°/hamburger/Hamburger";


import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <section className="react-app">
    
    <Hamburger/>
   <Switch> 
   <Route path ="/movies" component={Movies}/>
   <Route path ="/" component={Home}/>
    <Home/>
    </Switch>
    </section>
  );
}

export default App;
