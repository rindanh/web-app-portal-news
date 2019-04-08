import React, { Component } from 'react';

function formatTitle(title){
	let titleShortened = title.split(" ",10).join("-").toLowerCase();
	titleShortened = titleShortened.split("--").join("-").toLowerCase();
	const str = titleShortened.split(".com").join("-").toLowerCase();
	return str;
}

function formatDate(date) {
    var time = new Date(date);
    var year = time.getFullYear();
    var day = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var month = time.getMonth() + 1;
    var composedTime = day + '/' + month + '/' + year + ' | ' + hour + ':' + (minute < 10 ? '0' + minute : minute);
    return composedTime;
}

class NewsDetail extends Component {
	constructor(props){
		super(props)
		this.state = {
			handle:'',
		};
	}
	componentDidMount(){
		this.setState({handle: this.props.match.params.handle})
	}
	render(){
		const article = this.props.articles.map((a) => {
			return (formatTitle(a.title) === this.state.handle) ?
				<div key={a.title}>
					<h2>{a.title}</h2>
					<div>{formatDate(a.publishedAt)}</div>
					<img src={a.urlToImage} alt="image preview"></img>
					<p>{a.content}</p>
					<div>oleh: {a.author}</div>
				</div> 
			:
				<div></div>
			}
		)
		return(
			<div>
				{article}
			</div>
		)
	}
}

export default NewsDetail;