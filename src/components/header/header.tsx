import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';


function Header() {
	return (
		<header>
			<Link to="/" style={{textDecoration: 'none'}}>
				<h1 className="logo">
					<span className="red-bg">COVID</span>
					<span className="wh-txt">india</span>
				</h1>
			</Link>
		</header>
	)
}

export default Header;