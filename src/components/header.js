import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
	margin: 0 auto;
	color: #26180C;
	font-weight: bolder;
	font-size: 1.4rem;
	line-height: 1.2;
	letter-spacing: 4px;
	margin: 0 0.5rem 0 0;
	padding: 0.25rem;
	text-decoration: none; 
	font-family: 'Open Sans Condensed', sans-serif;

	&.current-page {
		border-bottom: 2px solid #222;
	}

	&:last-of-type {
		margin: 0;
	}
`;

const Header = () => {
		return (
		<header
			css={css`
				margin-top: 1.5rem;
				height: 10%;
				display: flex;
				justify-content: space-between;
				padding: 0.5rem calc((100wv - 550px -0.5rem) / 2);
			`}
		>
			<nav css={css`margin-top: 0; margin: 0 auto;`}>
				<NavLink to='/' activeClassName='current-page'>Home</NavLink>
				<NavLink to='/about' activeClassName='current-page'>About</NavLink>
				<NavLink to='/projects' activeClassName='current-page'>Projects</NavLink>
      	<NavLink to='/contact' activeClassName='current-page'>Contact</NavLink>
			</nav>
		</header>
	);
}

export default Header;
