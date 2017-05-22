//This is the container component for all Story components.
//This is where the app pings the story feed, constructing Story
//components for each item in the feed.

import React, { Component } from 'react';

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';

import Story from '../Story/Story';


class StoryList extends Component {
	render(){
		return (
			<div className="StoryList">
				<Tiles fill={true}>
					<Tile wide={true}>
						<Story img='http://ww3.hdnux.com/photos/61/24/34/12928782/4/rawImage.png' title='Test Title'/>
					</Tile>
				</Tiles>
			</div>

		)
	}
}

export default StoryList;