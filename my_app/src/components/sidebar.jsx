import React, { Component } from 'react';
import './CSS/sidebar.css';

const imageStyle = {
    borderRadius: '80%',
    width:'100px',
    height:'128px'
}

const listStyle = {
    listStyleType: 'none',
    // once the bullets are removed the padding should be removed too
    padding: '0',
}

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <aside>
            <div className="text-center">
                <img src={require('../pictures/myPic.JPG')} style={imageStyle}/>
              <h1 id="profilePic" className='myName'><a href="index.html">Benson Fan</a></h1>
              <p className="myPicDescription">Gamer, Athlete, and Programmer</p>
            </div>
            <nav className='navSocialMedia'>
              <ul style={listStyle}>
                <li><a href="https://www.facebook.com/benson.fann/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>
                <li><a href="https://www.instagram.com/benson_fan/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
              </ul>
            </nav>
            <div className="footer">
              <p><small>
                  Made with <i class="fa fa-heart"></i> and <i className="fa fa-coffee"></i><br></br>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}