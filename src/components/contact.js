import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
 class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}> 
          <h2>Shreya Saxena</h2>
          <img src="https://t4.ftcdn.net/jpg/01/05/72/55/240_F_105725550_LsQIhnhtWkmUfJ7XMyFWAjTxtmsdlICx.jpg"
          alt="Avatar"
          style={{height:'250px'}}
          />
            <p style={{width:'82%', margin:'auto', paddingTop:'1em'}}> loremipsumsfjknfknsklhnsklhnsasg.segtooldsz...fseg</p>        
          </Cell>
        
        
        <Cell col={6}> 
          <h2>Contact Me:</h2>
          <hr/>
          <div className="contact-list">
          <List>
            <ListItem>
           <ListItemContent style={{fontSize:'25px', fontFamily:'Anton' ,fontWeight:"bold"}}>
           <i className="fa fa-phone-square" aria-hidden="true"/>
           (+91)7245-653-536
           </ListItemContent>
            </ListItem>
            <ListItem>
            <ListItemContent style={{fontSize:'25px', fontFamily:'Anton' ,fontWeight:"bold"}}>
           <i className="fa fa-fax" aria-hidden="true"/>
           123-4567-787
           </ListItemContent>
             </ListItem>
              <ListItem>
              <ListItemContent style={{fontSize:'20px', fontFamily:'Anton' ,fontWeight:"bold"}}>
           <i className="fa fa-envelope" aria-hidden="true"/>
            shreya6@gmail.com
           </ListItemContent>
              </ListItem>

              <ListItem>
              <ListItemContent style={{fontSize:'25px', fontFamily:'Anton' ,fontWeight:"bold"}}>
           <i className="fa fa-skype" aria-hidden="true"/>
           shrey02
           </ListItemContent>
              </ListItem>
              </List>
            </div>
        
        
        </Cell>
          </Grid>
      </div>
    )
  }
}
export default Contact;