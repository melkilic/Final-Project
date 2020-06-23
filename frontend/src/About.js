import React, { Component } from 'react';
import Navbar from "./Navbar";
import './about_man.png'
import 'font-awesome/css/font-awesome.min.css';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

export default function About(){
    const me= require('./5DC5DCB9-A306-4FB9-BBC5-635968C8836A.jpg')
      return (
        <div>
            <Navbar/>
          {/* Hello world */}
          <div className="awesome">
          </div>
          <meta charSet="UTF-8" />
          <title>about section</title>
          <section id="about">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="about-img">
                     {/* <img className="shape" src={triangle} alt="" /> */}
                    <img className="man" src={me} alt="" /> 
                  </div>
                </div>
                <br />
                <div className="col-md-7 about-right">
                  <h2 className="color-3"><b>About</b>
                  </h2>
                  <h3 className="p-first text-white">
                   "We are in a fight. Humankind is in a fight with a fire called Coronavirus. Humankind versus the virus. This fire caused a global crisis by killing 20,601 people only in the U.S and 109,823 people across the world until now.
It will keep on spreading and eventually taking more lives unless we take action quickly and mindfully."
</h3>
<h3 className="p-first text-white">
This is how my second blog in Flatiron begins. Knowing how important it is to get the latest 
information, especially when it comes to a topic like this, I wanted to build a project about COVID-19.
  In this project, five APIs have been used; four from The Covid Tracking Project, one from Esri. 
  The maps that I have used are  Google Maps and Mapbox maps.
</h3>

                
                  {/* <h3 className="color-3 social-link-text">
                    <button className="btn btn-danger">Hire Me</button>
                  </h3> */}
                  <ul className="about-link">
                    <li><a href="https://mail.google.com/mail/u/0/#inbox"><i class="fa fa-envelope"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/melike-kilic-8b959a1a3/"><i className="fa fa-linkedin-square" /></a></li>
                    <li><a href="https://github.com/melkilic"><i className="fa fa-github" /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCjIus15v1gCuHrGL8m2ZmxA?view_as=subscriber"><i className="fa fa-youtube-play" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    
  };