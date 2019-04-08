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
			<div className="container">
				<li>
					<div className="row">
						<div className="col-sm-4">
							<img className="img-responsive" src={this.props.articlesPreview.urlToImage} alt="image preview"></img>
						</div>
						<div className="col-sm-8">
							<div className="title">
								<h3><Link to={str}>{ this.props.articlesPreview.title }</Link></h3>
							</div>
							<div className="description">{ this.props.articlesPreview.description }</div>
						</div>
					</div>
				</li>
				<br/>
				<br/>
			</div>
		);
	}
}

export default Preview;