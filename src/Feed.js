import React, { Component } from 'react';
import Preview from './Preview'
import CheckboxCategory from './CheckboxCategory';

const OPTIONS = ["business", "entertainment", "health", "science", "sports", "technology"];

class Feed extends Component {
	constructor(props){
		super(props)
		this.state = {	
		    checkboxes: OPTIONS.reduce(
		      (options, option) => ({
		        ...options,
		        [option]: false
		      }),
		      {}
		)
		}
	}

	render(){
		const listArticles = this.props.articles;
		const articlesPreviews = listArticles.map((preview) =>
			<Preview key={preview.title} articlesPreview={preview} />
		);
		console.log(this.state.checkboxes.business);
		return (
			<div className="flex-container">
				<div>
					Select Category:
					<form onSubmit={this.handleFormSubmit}>
						{this.createCheckboxes()}
						<div>
							<button type="submit" className="btn btn-primary">
						        Save
						    </button>
						</div>
					</form>
				</div>
				<div>
					<ul>{articlesPreviews}</ul>
				</div>
			</div>
		);
	};

	handleCheckboxChange = changeEvent => {
	    const { name } = changeEvent.target;

	    this.setState(prevState => ({
	      checkboxes: {
	        ...prevState.checkboxes,
	        [name]: !prevState.checkboxes[name]
	      }
	    }))
	}

	handleFormSubmit = formSubmitEvent => {
	    formSubmitEvent.preventDefault()

	    Object.keys(this.state.checkboxes)
	      .filter(checkbox => this.state.checkboxes[checkbox])
	      .forEach(checkbox => {
	        console.log(checkbox, "is selected.");
	      })
	}

	createCheckbox = option => (
	    <CheckboxCategory
	      label={option}
	      isSelected={this.state.checkboxes[option]}
	      onCheckboxChange={this.handleCheckboxChange}
	      key={option}
	    />
	)

	createCheckboxes = () => OPTIONS.map(this.createCheckbox)

	
}

export default Feed;