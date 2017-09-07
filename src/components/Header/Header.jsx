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
        <img className='large-logo' src={largeLogo} alt='This is S.A.' />
  		);

  		return(
  			<div className='Header'>
          {this.props.isMobile && buildLogoMobile()}
          {!this.props.isMobile && buildLogoDesktop()}
          <Paragraph text="ExpressNews.com brings you This is S.A., a bimonthly series showcasing the creativity and ingenuity of the city we call home." /> 
          <p>Note: Production of This is S.A. has been pushed back due to Hurricane Harvey. You'll find the next episode here on Friday, Sept. 15.</p>
        </div>
  		)
  	}
}

export default Header;