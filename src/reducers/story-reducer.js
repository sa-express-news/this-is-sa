import * as types from '../actions/action-types';

import mockStories from '../mockstories.json';

const fallBackStories = mockStories.stories;

export default (state = {
    isFetching: false,
    errorFetching: false,
    stories: fallBackStories
}, action) => {
    switch (action.type) {
        case types.REQUEST_STORIES:
            return Object.assign({}, state, {
                isFetching: true,
                errorFetching: false,
                stories: fallBackStories
            });
        case types.REQUEST_STORIES_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                errorFetching: false,
                stories: action.stories
            });
        case types.REQUEST_STORIES_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorFetching: true,
                stories: fallBackStories
            });
        default:
            return state;
    }
}
