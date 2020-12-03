import React, { Component } from 'react';
import Logo from "../logo/Logo";


class Header extends Component {
    state = {  }
    render() { 
        return ( <section className="header"> 
               <Logo/>
             
                <button> Login </button> </section>  );
    }
}
 
export default Header;