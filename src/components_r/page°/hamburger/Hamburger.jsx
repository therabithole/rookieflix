import "../../../styles/App.css";

import React, {useState} from 'react'

function Hamburger() {

    const [hidden, visible] = useState(false)


 return (
        <React.Fragment>
        <section className="menu-and-navigation">
        <section onClick={()=> visible(hidden => !hidden)} className="burger">
           
            <div className="line1 trans"> </div>
            <div className="line2 trans"> </div>
            <div className="line3 trans"> </div>
            </section> 
        
        {hidden && <ul className="navigation-list">
        <li> <a className= "navigation-links" href="/">Home </a> </li>
        <li> <a className="navigation-links" href="/movies"> Movies  </a></li>        
        <li> <a className="navigation-links" href="/shows"> Shows </a></li>    
        </ul>  }</section> 
      
        </React.Fragment> )
    
}


export default Hamburger;