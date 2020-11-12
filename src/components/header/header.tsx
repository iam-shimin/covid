import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';


function Header({ children }: React.HTMLProps<HTMLDivElement>) {
	return (
		<header>
			<Link to="/" style={{textDecoration: 'none'}}>
				<h1 className="logo">
					<span className="red-bg">COVID</span>
					<span className="wh-txt">india</span>
				</h1>
			</Link>

			{children}
		</header>
	)
}

export default Header;