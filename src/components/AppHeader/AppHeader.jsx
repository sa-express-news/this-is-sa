import React, { Component } from 'react';

import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import FormAddIcon from 'grommet/components/icons/base/FormAdd';
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'

class AppHeader extends Component{
	render(){
		return(
			<Header>
        		<Title>This Is S.A.</Title>
					<Box flex={true} justify='end' direction='row' responsive={false}>
    					<Menu icon={<FormAddIcon/>} dropAlign={{"right": "right", "top": "top"}}>
      						<Anchor href='#' className='active'>Arts</Anchor>
      						<Anchor href='#'>Sports</Anchor>
      						<Anchor href='#'>Life</Anchor>
    					</Menu>
  					</Box>
        	</Header>
		)
	}
}

export default AppHeader;