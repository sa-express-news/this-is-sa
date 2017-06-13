// @flow

import React, { Component } from 'react';

import Header from '../Header/Header';
import LeadStoryList from '../LeadStoryList/LeadStoryList';
import Subsection from '../Subsection/Subsection';
import Footer from '../Footer/Footer';

import './App.css';

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
        <LeadStoryList stories={this.props.stories}/>
        <Subsection stories={this.props.stories} isMobile={this.state.isMobileScreen}/>
        <Footer />
      </div>
    );
  }
}

export default App;
