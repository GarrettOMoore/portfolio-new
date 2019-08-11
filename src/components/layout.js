import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Hero from '../components/hero';
import useSiteMetadata from '../hooks/use-sitemetadata';



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
					overflow-x: hidden;
					font-family: 'Open Sans Condensed', sans-serif;
					scroll-behavior: smooth;
				}
				* + * {
					margin-top: 1rem;
				}
					html,
					body {
						background-repeat: no-repeat;
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
						* a  {
							decoration: none;
							color: black;
						}

						h1,
						h2,
						h3,
						h4,
						h5,
						h6 {
							color: #222;
							letter-spacing: 0.5rem;
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

						main {
							width: 100%;
						}

						hr {
							border: 2px solid black;
  						border-radius: 5px;
							margin-top: 4rem;
						}

						#___gatsby {
							height: 100vh;
							background-image: linear-gradient(to bottom, #99B898 2rem, rgba(153,184,152, 0.3));
						}

						.contact-icons * {
							margin: 0.5rem;
						}

						#icon {
							border: 2px solid transparent;
						}
						#icon :hover {
							z-index: 10;
							border: 0px solid transparent;
							color: #D9863D;
						}

						#project-icons * {
							margin: 1rem;
							vertical-align: bottom;
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
				{/* <ContactIcons /> */}
				<main
					css={css`
						margin: 2rem auto 4rem;
						max-width: 90vw;
						width: 650px;
						overflow-y: scroll;

					`}
					>
						{children}
				</main>
		</>
	)
}


export default Layout;