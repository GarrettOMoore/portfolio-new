import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Hero from '../components/hero';
import styled from '@emotion/styled'; 
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import useSiteMetadata from '../hooks/use-sitemetadata';

const BGImage = styled(`div`)`
	background-image: url('/images/Quepal.jpg');
	background-position: top 20% center;
	background-size: cover;
	border-top: 4px solid black;
	box-shadow: 1rem red	 inset;
	width: 100vw;
	height: 100vh;
	+ * {
		margin-top: 0;
	}
`;


const Layout = ({ children }) => {
	const { title, description } = useSiteMetadata();


	return(
		<>
			<Global styles={css`
				* {
					box-sizing: border-box;
					margin: 0;
					text-align: center;
					overflow-y: scroll;
				}
				* + * {
					margin-top: 1rem;
				}
					html,
					body {
						background-color: #2CBF49;
						height: 100%;
						width: 100vw;
						overflow: visible;
						margin: 0;
						color: #555;
						font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Robot, Helvetica, Arial, sans-serif;
						font-size: 18px;
						line-height: 1.4;

						> div {
							margin-top: 0;
						}



						h1,
						h2,
						h3,
						h4,
						h5,
						h6 {
							color: #222;
							line-height: 1.1;

							+ * {
								margin-top: 0.5rem;
							}
						}

						strong {
							color: #222;
						}

						li {
							margin-top: 0.25rem;
						}


					}
			`}
			/>
				<Helmet>
					<html lang='en'/>
					<link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap" rel="stylesheet"></link>
					<title>{title}</title>
					<meta name='description' content={description} />
				</Helmet>
				<Hero />
				<main
					css={css`
						margin: 2rem auto 4rem;
						max-width: 90vw;
						width: 550px;
						overflow-y: scroll;
					`}
					>
						{children}
				</main>
		</>
	)
}


export default Layout;