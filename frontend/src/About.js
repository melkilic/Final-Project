import React, { Component } from 'react';
import Navbar from "./Navbar";
import './about_man.png'
import './image0-1.jpeg'
import 'font-awesome/css/font-awesome.min.css';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

export default function About(){
    const img= require('./about_man.png')
    const triangle=require('./about_triangle.png')
    const me= require('./image0-3.jpeg')
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
                    {/* <img className="man" src={me} alt="" />  */}
                  </div>
                </div>
                <br />
                <div className="col-md-7 about-right">
                  <h2 className="color-3"><b>About Me</b>
                  </h2>
                  <p className="p-first text-white">
                    hi
                  </p>
                
                  <h3 className="color-3 social-link-text">
                    <button className="btn btn-danger">Hire Me</button>
                  </h3>
                  <ul className="about-link">
                    <li><a href><i className="fa fa-fonticons" /></a></li>
                    <li><a href><i className="fa fa-envira" /></a></li>
                    <li><a href><i className="fa fa-reddit-alien" /></a></li>
                    <li><a href><i className="fa fa-dribbble" /></a></li>
                    <li><a href><i className="fa fa-youtube-play" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    
  };