import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import '../node_modules/grommet-css';

//PROJECT STRUCTURE

//App
	//Article
		//Header
			//Logo/Title
			//Menu/Social
		//StoryList
			//Story
			//Story
			//Story
			//Etc.
		//Footer
			//Credits

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
