import React from "react"
import useSiteMetadata from '../hooks/use-sitemetadata'
import Layout from '../components/layout';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";
import ContactIcons from '../components/contact-icons';
import { css } from '@emotion/core';

const about = () => {
	const { title, description } = useSiteMetadata();

	const { image } = useStaticQuery(graphql`
		query {
			image: file(relativePath: {eq: "closeup-cb.jpg" }) {
			sharp: childImageSharp {
	     fluid {
         ...GatsbyImageSharpFluid_withWebp
      }
		}
  }
		}
	`)

	return (
		<>
			<Layout>
			<ContactIcons />
				<h2>About Me</h2>
				<Image fluid={image.sharp.fluid} css={css`
						opacity: 0.8;				
					`} />
				{/* <div>
					<h1> Skills </h1>
					<ul>
						<li>React</li>
						<li>Gatsby</li>
						<li>GraphQL</li>
						<li>JavaScript</li>
						<li>MongoDB</li>
						<li>NodeJS</li>
						<li>Express</li>
					</ul>
				</div> */}
				<main>
					<p>Hello! My name is Garrett, I'm a full stack web developer 
						and musician based in Seattle, WA. Originally from San Diego, CA -
					 	I moved to Seattle for a change of scenery in 2008, and have 
					 	called it home ever since. Originally coming from a musical background, 
					 	I made the decision to pivot to a career in Software Development in 2017, 
					 	after a few years of self-learning fundmentals. I recently graduated from
						General Assembly's Software Engineering Immersive, where I'm now working as a 
						Teaching Assistant. When I'm not busy building things for the web, you can usually find
						me playing music around town, or digging around the many local record and book shops. 
					</p>
					<h4>
					Currently seeking full-time work in Seattle, or remote.
					</h4>
				</main>
				<h1>Skills: </h1>
				<div css={css`
					display: flex;
					width: 100%;
					height: 100%;
					margin: 0 auto;
					top: 1rem;
					flex-wrap: wrap;
					justify-content: space-between;
					text-align: center;

					div {
						display: flex;
						margin: 0 auto;
						top: 1;
						font-size: 1.5rem;
					}

					ul {
						padding: 0;
					}

				`}>
				<div>
					<ul>
							<li>React</li>
							<li>Gatsby</li>
							<li>GraphQL</li>
							<li>JavaScript</li>
							<li>MongoDB</li>
							<li>NodeJS</li>
							<li>Express</li>
							<li>TypeScript</li>
							<li>Python</li>
							<li>HTML5 Canvas</li>
						</ul>
					</div>
						<div>
					<ul>
							<li>Django</li>
							<li>PostGRES</li>
							<li>REST API</li>
							<li>Agile/SCRUM</li>
							<li>Git</li>
							<li>Terminal</li>
							<li>pSQL</li>
							<li>Sequelize</li>
							<li>MapBox</li>
							<li>Cloudinary</li>
					</ul>
				</div>
				</div>
				<p>...always adding new things!</p>
				{/* <Icons /> */}
			</Layout>
		</>
	)
}

export default about;
