import React, { Component } from 'react';
import "../styles/App.css"

import Header from "../components_r/page°/header/Header";
import Footer from "../components_r/page°/footer/Footer";
import Button from "../components_r/element°/buttons/Button";

// images
import teaser_freedom from "../assets/images/teaser_start.jpg";
import teaser_uncommit from "../assets/images/teaser_end.jpg";



class Home extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment> 
       
      <Header/>
     
        
        <section className="content home">         
            <section className="reel"> 
           
                <h1> Watch on Any Device </h1>
                <h2> Stream on your phone, tablet, laptop, PC and TV without paying more.
                First month is free! </h2>  <Button title={"Join Now"} /> 
            </section>
            <section className="features">
                <article className="high-quality">
                    <figure>
                            <i>
                                <svg viewBox="0 0 16 16" class="bi bi-badge-hd" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                                    <path d="M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11h1.187zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984H8.5zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843v-4.06z"/>
                                    </svg>
                                </i>
                    </figure> 
                    <figcaption> 
                            <h3>High Quality </h3> 
                            <p>Never run out of things to watch. Hundreds of movies and TV series available in HD.</p>
                    </figcaption>
                </article> 
                <article className="users">
                <figure> 
                    <i>
                        <svg viewBox="0 0 16 16" class="bi bi-people" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                        </svg>
                        </i>
                    </figure>        
                <figcaption>
                    <h3> Multiple User </h3> 
                    <p>No need for multiple accounts. Friends and family can share the same account. </p> </figcaption> 
                </article>
                <article className="discover"> 
                <figure>
                <i> 
                    <svg viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                    </i> </figure> 
                    <figcaption>

                <h3> Discover </h3> 
                <p>Find new things to watch based on your preferences 
                    and other user ratings. </p>
                    </figcaption>
                </article> 
                </section> 
            <section className="teasers">
            <article className="teaser_freedom"> 
            <article className="teaser-freedom-txt ">
                <small>complete freedom</small> 
                <h3> Watch Anytime, Anywhere. From Any Device.</h3>
                <p> Watch TV Shows And Movies on Smart TVs, Consoles, Chromecast, 
                Apple TV, Phone, Tablet or Browser.</p>
            </article>
           <img src={teaser_freedom}/> 
            </article>


            <article className="teaser_uncommit">  
            <article className="teaser-uncommit-txt">
                <small>No commitments</small>
                <h3> Cancel Online Anytime.</h3>
                <p>If you decide MTDb isn't for you - no problem. No commitment. 
                    Cancel online at anytime.</p>
            </article>
           <img src={teaser_uncommit}/>
            </article>
        </section> 
            </section>
        <Footer/>
        </React.Fragment>
        );
    }
}
 
export default Home;