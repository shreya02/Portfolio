import React, { Component } from 'react';
import {ProgressBar} from 'react-mdl';
 class Skills extends Component {
  render() {
    return (
      <div>
              <label>HTML</label>
              <ProgressBar progress={95} />
              <label>CSS</label>
              <ProgressBar progress={95} />
              <label>JavaScript</label>
              <ProgressBar progress={85} />
              <label>ReactJS</label>
              <ProgressBar progress={80} />
              <label>Node.js</label>
              <ProgressBar progress={50} />
              
              
      </div>
    )
  }
}
export default Skills;