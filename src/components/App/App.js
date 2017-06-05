// @flow

//This is the overarching app container. It wraps the entire project
//in a div with the class name "App."
//Basic Grommet components are used for scaffolding.

import React, { Component } from 'react';
import './App.css';

import { default as GrommetApp } from 'grommet/components/App'

import AppHeader from '../AppHeader/AppHeader';
import StoryList from '../StoryList/StoryList';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GrommetApp>
          <AppHeader/>
        	<StoryList />
          <Footer />
      	</GrommetApp>
      </div>
    );
  }
}

export default App;
