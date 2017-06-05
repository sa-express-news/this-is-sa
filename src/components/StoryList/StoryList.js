//This is the container component for all Story components.
//This is where the app pings the story feed, constructing Story
//components for each item in the feed.

import React, { Component } from 'react';

import Tiles from 'grommet/components/Tiles';

import Story from '../Story/Story';


class StoryList extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: []
		};
	}

	componentDidMount(){
		const th = this;

		const mockData = 
		[
			{
				img: 'http://ww3.hdnux.com/photos/61/24/34/12928782/4/rawImage.png',
				title: 'A day in the life of Spurs Jesus',
				description: 'If you\'ve ever wondered what Spurs Jesus does on a typical game day, the answer is "a lot" - the fitness enthusiast, event planner and local legend balances his private life with his public one with a very full schedule.',
				link: 'http://www.expressnews.com/this-is-sa/article/This-is-SA-A-day-in-the-life-of-Spurs-Jesus-11157293.php',
				byline: 'Lindsey Gawlik'
			},
			{
				img: 'http://ww2.hdnux.com/photos/61/11/65/12885365/6/rawImage.png',
				title: 'Meet the barber who pioneered hair portraits',
				description: 'Joe Barajas is not your average Joe. Barajas, known as "The Joe Barber," is an artist, pioneer and designer of hairstyles.',
				link: 'http://www.expressnews.com/this-is-sa/article/This-is-SA-Meet-the-barber-who-pioneered-hair-11122796.php',
				byline: 'Lindsey Gawlik'
			}
		];

		th.setState({data: mockData});
	}

	render(){
		const listOfStories = this.state.data;
		const stories = listOfStories.map(function(story, index){
			return <Story key={index} img={story.img} title={story.title} link={story.link} byline={story.byline} description={story.description} />
		});
		return (
			<div className="StoryList">
				<Tiles fill={true}>
					{stories}
				</Tiles>
			</div>

		)
	}
}

export default StoryList;