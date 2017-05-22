//This is the overarching app container. It wraps the entire project
//in a div with the class name "App."
//Basic Grommet components are used for scaffolding.

import React, { Component } from 'react';
import './App.css';

import { default as GrommetApp } from 'grommet/components/App'
import Article from 'grommet/components/Article'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import FormAddIcon from 'grommet/components/icons/base/FormAdd';
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'

import StoryList from '../StoryList/StoryList';

class App extends Component {
  render() {
    return (
    	<div className="App">
      		<GrommetApp>
        		<Article>
        			<Header>
        				<Title>
        					This Is S.A.
        				</Title>
						<Box flex={true} justify='end' direction='row' responsive={false}>
    						<Menu icon={<FormAddIcon/>} dropAlign={{"right": "right", "top": "top"}}>
      							<Anchor href='#' className='active'>Arts</Anchor>
      							<Anchor href='#'>Sports</Anchor>
      							<Anchor href='#'>Life</Anchor>
    						</Menu>
  						</Box>
        			</Header>
        			<Section>
        				<StoryList/>
        			</Section>
        		</Article>
      		</GrommetApp>
      	</div>
    );
  }
}

export default App;
