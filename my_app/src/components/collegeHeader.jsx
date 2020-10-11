import React, { Component, ImageBackground } from 'react';
import './CSS/CollegeHeader.css';
import whiteUBClogo from '../pictures/ubc-logo-2018-fullsig-white-rgb300.png';
import blackUBClogo from '../pictures/ubc-logo-2018-fullsig-black-rgb300.png';
import ubcMainMall from '../pictures/ubcmainMallpic.jpg';

const imageStyle = {
}

export default class CollegeHeader extends Component {
    render() {
        return (
            <div className='container'>
                <img className='image' src={ubcMainMall}/>
                <img className='ubc-logoWhite' src={whiteUBClogo}/>
                <img className='ubc-logoBlack' src={blackUBClogo}/>
                <h1 className="major">3rd Year Computer Science</h1>
            </div> 
        )
    }
}