import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
	render(){
		return(
			<div className="row header justify-content-center">
				<h1><Link to="/">TOP HEADLINES FROM INDONESIA</Link></h1>			
			</div>
		)
	}
}
export default Header;