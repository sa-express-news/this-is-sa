// @flow

import React, { Component } from 'react';

import FullPhoto from '../FullPhoto/FullPhoto';

import smallLogo from '../../images/logo-small.png';
import largeLogo from '../../images/logo-large.png';

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
				{ this.props.isMobile && buildLogoMobile() }
        		{ !this.props.isMobile && buildLogoDesktop() }
        	</div>
  		)
  	}
}

export default Header;