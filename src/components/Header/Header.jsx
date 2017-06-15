// @flow

import React, { Component } from 'react';

import FullPhoto from '../FullPhoto/FullPhoto';
// import AppTitle from '../AppTitle/AppTitle';
import Paragraph from '../Paragraph/Paragraph';

import smallLogo from '../../images/logo-small.png';
import largeLogo from '../../images/logo-large.png';

import './Header.css';

class Header extends Component {
	
	props:{
    	isMobile: boolean
  	};

  	render(){
  		const buildLogoMobile = () => (
  			<FullPhoto src={smallLogo} alt='This is S.A.'/>
  		);

  		const buildLogoDesktop = () => (
  			<FullPhoto src={largeLogo} alt='This is S.A.' />
  		);

  		return(
  			<div className='Header'>
        {this.props.isMobile && buildLogoMobile()}
        {!this.props.isMobile && buildLogoDesktop()}
        <Paragraph text="From our producers at ExpressNews.com, we bring you This is S.A., a bimonthly series that showcases the creativity and ingenuity of the city we call home." /> 
        <Paragraph text="Here, we'll profile everyday people doing amazing things to enrich the lives of San Antonians. This is your city. These are your stories. This is S.A."/>
        	</div>
  		)
  	}
}

export default Header;