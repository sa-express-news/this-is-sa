// @flow

export function parseFeed(feed: Object){
	return new Promise((resolve, reject) =>{

		//Turn the feed string into an array of <item>s
		let storyArray = Array.from(feed.getElementsByTagName('item'));
		
		//For each item:
		let newArray = storyArray.map((story =>{

			//create a new story object
			let storyObject = {};
					
				//Set the <item>'s title to the object's title
				//First, remove the 'This is S.A.: ' heading from the headline
				//Then, remove the leading and trailing whitespace the feed inserts
				storyObject.title = removeLeadingAndTrailingWhitespace(removeThisIsSA(story.getElementsByTagName('title')[0].textContent));

				//Set the <item>'s image to the object's image
				storyObject.img = story.getElementsByTagNameNS('http://search.yahoo.com/mrss/', 'content')[0].getAttribute('url');
				
				//Set the <item>'s link to the object's link
				storyObject.link = story.getElementsByTagName('link')[0].textContent;
					
				//Set the <item>'s description to the object's description
				//Only take the first <p> tag's worth of text
				storyObject.description = grabFirstSentence(story.getElementsByTagName('description')[0].textContent);

				return storyObject;

				//Removes the 'This is S.A.: ' string from the beginning of
				//a string, since all headlines include it but we don't
				//want it in our app.

				function removeThisIsSA(string: string){

					if (string.includes(' This is SA: ')){
						return string.replace('This is SA: ', '');
					}
					if (string.includes(' This is S.A.:')){
						return string.replace('This is S.A.: ', '');
					}

					return string;
				}


				//Removes the first character of a string if that character is whitespace.
				function removeLeadingAndTrailingWhitespace(string: string){
					
					//Remove the first character of whitespace, if it's there
					if (string.indexOf(' ') === 0){
						string = string.slice(1);
					}

					//Remove the last character of whitespace, if it's there
					if (string.lastIndexOf(' ') === string.length -1){
						string = string.slice(0, -1);
					}
					return string;
				}

				//Given a long string including <p> tags, returns only the first sentence - stripped of
				//<p> tags and having converted HTML entities back to text.
				function grabFirstSentence(string: string){
					//Start the string at the first <p> tag, to ignore leading whitespace
					let startIndex = string.indexOf('<p>');

					//Add 3 to move past that <p> tag
					startIndex += 3;

					//End at the closing </p> tag.
					let endIndex = string.indexOf('</p>');

					//Slice the string into just the first paragraph, then clean HTML
					//escaped entities.
					return removeHTMLEntities(string.slice(startIndex, endIndex));
				}

				//Helper function to turn HTML-encoded items like emdashes back into text.
				//The JS DOMParser prevents scripts from executing, so this is safe even if
				//someone messed with the feed.
				function removeHTMLEntities(string: string){
					const parser = new DOMParser();
					const dom = parser.parseFromString(
						`<!doctype html><body>${string}`, 'text/html');
					return dom.getElementsByTagName('body')[0].textContent;
					}
		}));

		return resolve(newArray);
			
				
				//Push the story object to the array
		//Return the array
	})
}



