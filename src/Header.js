import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
	render(){
		return(
			<div className="Header">
				<nav className="navbar navbar-light">
					<ul className="nav navbar-nav">
						<h1><li className="nav-item"><Link to="/">TOP HEADLINES FROM INDONESIA</Link></li></h1>
					</ul>
				</nav>
			</div>
		)
	}
}
export default Header;