import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skill';
class Resume extends Component {
  render() {
    return (
      <div>
      <Grid className="grid-resume">
      <Cell col={4}>
      <div style={{textAlign:'center'}}>
        <img src="https://www.shareicon.net/data/128x128/2016/08/13/808478_person_512x512.png"
        alt="avatar"
        style={{height:'200px'}}
        />
      </div>
      <h2 style={{paddingTop:'2em'}}>Shreya Saxena</h2>
      <h4 style={{color:'grey'}}>Web Developer</h4>
      <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea</p>
      <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
      
      <h5>Address</h5>
      <p>ABC Road, XYZ</p>
      <h5>Phone</h5>
      <p>(+91)5454-345-345</p>
      <h5>Email</h5>
      <p>ABC@gmail.com</p>
      <h5>Website</h5>
      <p>ABC.com</p>
      <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
      </Cell>
      <Cell className="resume-right-col" col={8}>
      <h2>Education</h2>
      <Education
      startYear={2016}
      endYear={2020}
      schoolName="ABC College,XYZ"
      schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "/>
      
      <Education
      startYear={2014}
      endYear={2016}
      schoolName="GHI School"
      schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "/>
      

      <Education
      startYear={2014}
      endYear={2012}
      schoolName="ghifgh"
      schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
      
      <hr style={{borderTop:'3px solid #e22947'}}/>
      
      <h2>Experience</h2>
      <Experience
      startYear={2017}
      endYear={2018}
      naame="xyzabc"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "/>
      
      <Experience
      startYear={2016}
      endYear={2018}
      naame="xyzabfefc"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
      
      <hr style={{borderTop:'3px solid #e22947'}}/>
      <h2>Skills</h2>
      <Skills/>
      </Cell>
      </Grid>
      </div>
      
    )
  }
}
export default Resume;