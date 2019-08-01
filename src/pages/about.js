import React from "react"
import useSiteMetadata from '../hooks/use-sitemetadata'
import Layout from '../components/layout';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";
import Icons from '../components/skill-icons'
import { css } from '@emotion/core';

const about = () => {
	const { title, description } = useSiteMetadata();

	const { image } = useStaticQuery(graphql`
		query {
			image: file(relativePath: {eq: "research_one.jpeg" }) {
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
					<p>Hello! My name is Garrett, and I'm a full stack web developer 
						and musician based in Seattle, WA. Originally from San Diego, CA -
					 	I moved to Seattle for a change of scenery in 2008, and have gladly 
					 	called it home ever since. Originally coming from a musical background, 
					 	I made the decision to pivot to a career in Software Development in 2017, 
					 	after a couple of years self-learning fundmentals. I recently graduated from
						 General Assembly's Software Engineering Immersive, where I'm now working as a Teaching Assistant.</p>
				</main>
				<h3>Core Skills: </h3>
				<Icons />
			</Layout>
		</>
	)
}

export default about;
