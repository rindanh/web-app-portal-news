import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Preview.css'

class Preview extends Component {
	render(){
		const title = this.props.articlesPreview.title;
		let titleShortened = title.split(" ",10).join("-").toLowerCase();
		titleShortened = titleShortened.split("--").join("-").toLowerCase();
		const str = titleShortened.split(".com").join("-").toLowerCase();
		return(
			<div className = "container">
				<li>
					<img src={this.props.articlesPreview.urlToImage} alt="image preview" className="column-1"></img>
					<div className="title">
						<h3><Link to={str}>{ this.props.articlesPreview.title }</Link></h3>
					</div>
					<div className="description">{ this.props.articlesPreview.description }</div>
				</li>
				<br/>
			</div>
		);
	}
}

export default Preview;