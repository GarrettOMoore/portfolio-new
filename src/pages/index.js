import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Layout from '../components/layout';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import Instagram from '../components/instagram';


const index = () => {
	const { image } = useStaticQuery(graphql`
	query {
		image: file(relativePath: {eq: "sitting-cb.jpg" }) {
		sharp: childImageSharp {
		 fluid  {
			 ...GatsbyImageSharpFluid_withWebp
		}
	}
}
	}
`)

	return (
		<>
			<Layout>
				<Image fluid={image.sharp.fluid} css={css`
							opacity: 0.8;				
						`} />
						<hr />
						<Instagram />
			</Layout>
		</>
	)
}

export default index;
