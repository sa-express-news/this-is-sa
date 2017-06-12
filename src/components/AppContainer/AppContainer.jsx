// @flow

import {connect} from 'react-redux';
import actions from '../../actions';
import App from '../App/App';

const mapStateToProps = (state) => {
	return {
		isFetching: state.stories.isFetching,
		errorFetching: state.stories.errorFetching,
		stories: state.stories.stories
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchStories: () => {
			dispatch(actions.story.fetchStories())
		}
	}
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;