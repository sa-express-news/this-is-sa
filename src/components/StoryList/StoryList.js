// @flow

//This is the container component for all Story components.
//This is where the app pings the story feed, constructing Story
//components for each item in the feed.

import React, { Component } from 'react';

import Tiles from 'grommet/components/Tiles';

import HeroSection from '../HeroSection/HeroSection';
import Story from '../Story/Story';

import {parseFeed} from '../../feedparser.js';

import './StoryList.css';

class StoryList extends Component {

	state = {
    	hero: {},
		stories: []
  	};

	constructor(props: Object){
		super(props);

		this.state = {
			hero: {},
			stories: []
		};
	}

	componentDidMount(){
		const th = this;

		//Note: CORS will block the actual feed in development, so it's hosted on my site instead.
		fetch('https://kiafarhang.com/this-is-sa')
	   	//fetch('http://www.expressnews.com/default/feed/this-is-sa-feed-1596.php')
      	.then(response => response.text())
      	.then(str => (new window.DOMParser()).parseFromString(str, 'text/xml'))
      	.then(data => parseFeed(data))
      	.then((feed) =>{

      		//Extract the first story in the feed for the hero section
      		let heroStory = feed.splice(0, 1);
      		
      		//Take the rest of the stories for the lower section
      		let otherStories = feed;

      		th.setState({
      			hero: heroStory[0],
      			stories: otherStories
      		});
      	})

      	//Use a hard-coded list of stories if there's an error pinging the feed
      	.catch((err) =>{
      		console.log('Error fetching stories, falling back to stored copies');
      		const mockHero = {
				img: 'http://ww3.hdnux.com/photos/61/50/41/13011050/4/rawImage.png',
				title: 'Meet the creator of San Antonio\'s most famous glass shop',
				description:'Gini Garcia found her passion for glass-blowing at age 28. She now is the president and artist behind Garcia Art Glass\'s unbelievable creations - giant colorful pieces that have been featured around the world. The business is family owned and operated, with Garcia\'s sister, mother and niece helping run the shop. Many of Garcia\'s pieces are featured in elegant hotels, such as the JW Marriott San Antonio Hill Country Resort &amp; Spa or the Hyatt Regency San Antonio Riverwalk.',
				link: 'http://www.expressnews.com/this-is-sa/article/This-is-S-A-Meet-the-creator-of-San-Antonio-s-11189564.php'
			};

			const mockStories = 
			[	
				{
				img: 'http://ww3.hdnux.com/photos/61/50/41/13011050/4/rawImage.png',
				title: 'Meet the creator of San Antonio\'s most famous glass shop',
				description:'Gini Garcia found her passion for glass-blowing at age 28. She now is the president and artist behind Garcia Art Glass\'s unbelievable creations - giant colorful pieces that have been featured around the world.',
				link: 'http://www.expressnews.com/this-is-sa/article/This-is-S-A-Meet-the-creator-of-San-Antonio-s-11189564.php'
				},
				{
				img: 'http://ww3.hdnux.com/photos/61/24/34/12928782/4/rawImage.png',
				title: 'A day in the life of Spurs Jesus',
				description: 'If you\'ve ever wondered what Spurs Jesus does on a typical game day, the answer is "a lot" - the fitness enthusiast, event planner and local legend balances his private life with his public one with a very full schedule.',
				link: 'http://www.expressnews.com/this-is-sa/article/This-is-SA-A-day-in-the-life-of-Spurs-Jesus-11157293.php'
				},
				{
				img: 'http://ww2.hdnux.com/photos/61/11/65/12885365/6/rawImage.png',
				title: 'Meet the barber who pioneered hair portraits',
				description: 'Joe Barajas is not your average Joe. Barajas, known as "The Joe Barber," is an artist, pioneer and designer of hairstyles.',
				link: 'http://www.expressnews.com/this-is-sa/article/This-is-SA-Meet-the-barber-who-pioneered-hair-11122796.php'
				}
			];

			th.setState({
				hero: mockHero,
				stories: mockStories
			});
      	});
	}

	render(){
		const listOfStories = this.state.stories;
		const stories = listOfStories.map(function(story, index){
			return <Story key={index} img={story.img} title={story.title} link={story.link} description={story.description} />
		});
		return (
			<div className="StoryList">
			<HeroSection img={this.state.hero.img} title={this.state.hero.title} description={this.state.hero.description} link={this.state.hero.title}/>
				<Tiles fill={true} flush={false} direction='row' margin='small' size='large'>
					{stories}
				</Tiles>
			</div>

		)
	}
}

export default StoryList;