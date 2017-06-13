// @flow

import React, { Component } from 'react';

// import FullPhoto from '../FullPhoto/FullPhoto';
import AppTitle from '../AppTitle/AppTitle';
import AppSubtitle from '../AppSubtitle/AppSubtitle';

// import smallLogo from '../../images/logo-small.png';
// import largeLogo from '../../images/logo-large.png';

import './Header.css';

class Header extends Component {
	
	props:{
    	isMobile: boolean
  	};

  	render(){
  		// const buildLogoMobile = () => (
  		// 	<FullPhoto src={smallLogo} alt='This is S.A.'/>
  		// );

  		// const buildLogoDesktop = () => (
  		// 	<FullPhoto src={largeLogo} alt='This is S.A.' />
  		// );

  		return(
  			<div className='Header'>
          <AppTitle text='This is S.A.'/>
          <AppSubtitle text='Ordinary people doing extraordinary things'/>
        	</div>
  		)
  	}
}

export default Header;