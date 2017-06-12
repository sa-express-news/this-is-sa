// @flow

import React, { Component } from 'react';

import Header from '../Header/Header';
import StoryList from '../StoryList/StoryList';

import './App.scss';

class App extends Component {
  props: {
    isFetching: boolean,
    errorFetching: boolean,
    stories: any,
    fetchStories: Function
  };

  state = {
    isMobileScreen: true
  };

  componentDidMount(){
    this.setIsMobile();
    window.addEventListener('resize', this.setIsMobile);

    this.props.fetchStories();
  }

  setIsMobile = () => {
    const isMobileScreen = window.innerWidth < 768;
    if (isMobileScreen !== this.state.isMobileScreen) {
      this.setState({ isMobileScreen });
    }
  }
  render() {
    return (
      <div className="App">
        <Header isMobile={this.state.isMobileScreen}/>
        <StoryList stories={this.props.stories}/>
      </div>
    );
  }
}

export default App;
