import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
 class Landing extends Component {
  render() {
    return (
    
      <div style={{width:'100%',margin:'auto'}}>
        <Grid className="landing-grid">
        <Cell col={12}>
        <img src = "https://t4.ftcdn.net/jpg/01/05/72/55/240_F_105725550_LsQIhnhtWkmUfJ7XMyFWAjTxtmsdlICx.jpg"
        alt="avatar"
        className="avatar-img"
        />


        <div className="banner-text">
        <h1>Full Stack Web Developer</h1>
        <hr/>
        <p>HTML | CSS |  JavaScript | Bootstrap | ReactJS | Node.js | MySQL </p>
        
        <div className="social-links">
        {/*LinkedIn*/}
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin-square"  aria-hidden="true"/>
        </a>

        {/*Github*/}
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github-square"  aria-hidden="true"/>
        </a>

        {/*Medium*/}
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-medium"  aria-hidden="true"/>
        </a>

        {/*Quora*/}
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-quora"  aria-hidden="true"/>
        </a>
        </div>
        </div>
        </Cell>
        </Grid>
      </div>
    );
  }
}
export default Landing;