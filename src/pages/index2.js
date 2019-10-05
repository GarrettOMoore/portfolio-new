// import React from "react"
// import { useStaticQuery, graphql } from "gatsby";
// import Layout from '../components/layout';
// import Image from 'gatsby-image';
// import { css } from '@emotion/core';
// import ContactIcons from '../components/contact-icons';


// const index = () => {
// 	const { image } = useStaticQuery(graphql`
// 	query {
// 		image: file(relativePath: {eq: "sitting-cb.jpg" }) {
// 		sharp: childImageSharp {
// 		 fluid  {
// 			 ...GatsbyImageSharpFluid_withWebp
// 		}
// 	}
// }
// 	}
// `)

// 	return (
// 		<>
// 			<Layout>
// 				<ContactIcons />
// 				<Image fluid={image.sharp.fluid} css={css`
// 							opacity: 0.8;				
// 						`} />
// 			</Layout>
// 		</>
// 	)
// }

// export default index2;
