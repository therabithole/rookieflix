import React, { Component } from 'react'
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
        <section className="footer">
        <section className="footer-title">
            <small>About  </small>
            <small> Short films streaming platform </small> 
       </section>
       <section className="footer-list"> 
       <ul>
            <p> Explore </p>
           <li><a  href="">Top Movies</a></li>
           <li><a  href="">Top Shows</a></li>
           <li><a  href="">Coming Soon</a></li>
           <li><a  href="">Now Playing</a></li>
           <li><a href=""> Player </a></li>
          
       </ul>
       <ul>
            <p> Genre </p>
           <li><a href="">Action </a></li>
           <li><a href="">Comedy </a></li>
           <li><a href="">Drama </a></li>
           <li><a href="">Crime  </a></li>
           <li><a href="">Adventure  </a></li>
       </ul>
       <ul>
       <p> Pages </p>
           <li><a href="">Contact </a></li>
           <li><a href="">Privacy Policy </a></li>
           <li><a href="">Terms of Use </a></li>
           <li><a href="">About </a></li>
       </ul>
        </section> </section>  );
    }
}
 
export default Footer;