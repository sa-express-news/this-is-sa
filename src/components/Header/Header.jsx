// @flow

import React, { Component } from 'react';

import FullPhoto from '../FullPhoto/FullPhoto';
// import AppTitle from '../AppTitle/AppTitle';
import Paragraph from '../Paragraph/Paragraph';

import smallLogo from '../../images/logo-small.png';
import largeLogo from '../../images/logo-large.png';

import './Header.css';

class Header extends Component {

	props: {
		isMobile: boolean
	};

	render() {
		const buildLogoMobile = () => (
			<FullPhoto src={'https://s3.amazonaws.com/labs.expressnews.com/this-is-sa/logo-small.png'} alt='This is S.A.' />
		);

		const buildLogoDesktop = () => (
			<img className='large-logo' src={'https://s3.amazonaws.com/labs.expressnews.com/this-is-sa/logo-large.png'} alt='This is S.A.' />
		);

		return (
			<div className='Header'>
				{this.props.isMobile && buildLogoMobile()}
				{!this.props.isMobile && buildLogoDesktop()}
				<Paragraph text="ExpressNews.com brings you This is S.A., a bimonthly series showcasing the creativity and ingenuity of the city we call home." />
			</div>
		)
	}
}

export default Header;