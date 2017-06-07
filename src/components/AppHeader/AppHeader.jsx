import React, { Component } from 'react';

// import Header from 'grommet/components/Header'
// import Title from 'grommet/components/Title'
import Image from 'grommet/components/Image'
import Box from 'grommet/components/Box'
// import FormAddIcon from 'grommet/components/icons/base/FormAdd'
// import Menu from 'grommet/components/Menu'
// import Anchor from 'grommet/components/Anchor'

import smallLogo from '../../images/logo-small.png';
import largeLogo from '../../images/logo-large.png';

class AppHeader extends Component{

  props:{
    isMobile: boolean
  };

  render(){
  	const buildLogoMobile = () => (
  		<Image src={smallLogo} />
  	);

  	const buildLogoDesktop = () => (
  		<Image src={largeLogo} />
  	);

  	return(
  		<Box>
  			{ this.props.isMobile && buildLogoMobile() }
        	{ !this.props.isMobile && buildLogoDesktop() }
		</Box>
	)
  }
}

export default AppHeader;