import React, { Component } from 'react';
import './CSS/sidebar.css';
import { Container, Table } from 'react-bootstrap';
import cplusplusLogo from '../pictures/cpluspluslogo.png';
import java8Logo from '../pictures/java8_logo.png';
import html5Logo from '../pictures/HTML_logo.png';
import javaScriptLogo from '../pictures/javascriptlogo.png';
import cssLogo from '../pictures/css_logo.png';

const imageStyle = {
  profilePicStyle: {
    borderRadius: '80%',
    width:'100px',
    height:'128px'
  },

  listStyle: {
    listStyleType: 'none',
    // once the bullets are removed the padding should be removed too
    padding: '0',
  },

  logoStyle:{
    width: '20px',
    height: '20px',
  }
}

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <aside>
            {/*this is name, picture and stub*/}
            <div className="profilePic">
                <img src={require('../pictures/myPic.JPG')} style={imageStyle.profilePicStyle}/>
              <h1 id="profilePic" className='myName'>Benson Fan</h1>
              <p className="myPicDescription">Gamer - Athlete - Programmer</p>
            </div>

            {/*this is things i'm proficient in*/}
            <nav>
              <ul className='skills' style={imageStyle.listStyle}>
                <li className='skill-title'>Languages</li>
                <li><img src={cplusplusLogo} style={imageStyle.logoStyle}></img> C++</li>
                <li><img src={java8Logo} style={imageStyle.logoStyle}></img> Java 8</li>
                <li><img src={javaScriptLogo} style={imageStyle.logoStyle}></img> JavaScript ES6</li>
                <li><img src={html5Logo} style={imageStyle.logoStyle}></img> HTML5</li>
                <li><img src={cssLogo} style={imageStyle.logoStyle}></img> CSS</li>
              </ul>

              <ul className='skills' style={imageStyle.listStyle}>
                <li className='skill-title'>Technologies</li>
                <li><img src={cplusplusLogo} style={imageStyle.logoStyle}></img> Node.js</li>
                <li><img src={java8Logo} style={imageStyle.logoStyle}></img> ReactJS</li>
                <li><img src={javaScriptLogo} style={imageStyle.logoStyle}></img> Junit 6</li>
                <li><img src={html5Logo} style={imageStyle.logoStyle}></img> GBD</li>
                <li><img src={cssLogo} style={imageStyle.logoStyle}></img> llbd</li>
              </ul>

              <ul className='skills' style={imageStyle.listStyle}>
                <li className='skill-title'>Technologies</li>
                <li><img src={cplusplusLogo} style={imageStyle.logoStyle}></img> Visual Studio Code</li>
                <li><img src={java8Logo} style={imageStyle.logoStyle}></img> Git Version Control</li>
                <li><img src={javaScriptLogo} style={imageStyle.logoStyle}></img> Intellij IDEA</li>
                <li><img src={html5Logo} style={imageStyle.logoStyle}></img> Xcode</li>
              </ul>





            </nav>
            



            <nav className='navSocialMedia'>
              <ul style={imageStyle.listStyle}>
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