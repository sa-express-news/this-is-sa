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
    const stories = this.props.stories;
    let leadStories = null;
    let subStories = null;

    if (stories.length > 1){
      leadStories = stories.slice(0, 1);
      subStories = stories.slice(1);
    }
    
    return (
      <div className="App">
        <Header isMobile={this.state.isMobileScreen}/>
        <LeadStoryList stories={leadStories !== null ? leadStories : stories}/>
        {subStories !== null && <Subsection stories={subStories} isMobile={this.state.isMobileScreen}/>}
        <Footer />
      </div>
    );
  }
}

export default App;
