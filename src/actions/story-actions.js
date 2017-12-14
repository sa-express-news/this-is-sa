import * as types from './action-types';

import { parseFeed } from '../feedparser.js';

const requestStories = () => {
	return {
		type: types.REQUEST_STORIES,
		stories: []
	}
}

const receiveStories = (data) => {
	return {
		type: types.REQUEST_STORIES_SUCCESS,
		stories: data
	}
}

const requestFailure = () => {
	return {
		type: types.REQUEST_STORIES_FAILURE,
		stories: []
	}
}

const fetchStories = () => {
	return dispatch => {
		dispatch(requestStories());
		// dispatch(requestFailure());

		//Note: CORS will block the actual feed in development, so it's hosted on my site instead.
		// return fetch('https://kiafarhang.com/this-is-sa2') 
		return fetch('/default/feed/this-is-sa-feed-1596.php')
			.then(response => response.text())
			.then(str => (new window.DOMParser()).parseFromString(str, 'text/xml'))
			.then(data => parseFeed(data))
			.then((feed) => {

				dispatch(receiveStories(feed));


			})
			.catch((err) => {
				dispatch(requestFailure());
			});
	}
}

export default { fetchStories };