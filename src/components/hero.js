import React from 'react';
import styled from '@emotion/styled'; 
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Header from '../components/header';

const ImageBackground = styled(BackgroundImage)`
	background-image: url('/images/jan-antonin-kolar.jpg');
	background-position: top 20% center;
	background-size: cover;
	position: relative;
	height: 70vh;
	width: 100%;

	+ * {
		margin-top: 0;
	}
`;

const Logo = styled(BackgroundImage)`
	${'' /* margin: 1rem 1rem 1rem 1rem; */}
	top: 2rem;
	bottom: 1rem;
	margin: 0 auto;
	text-align: center;
	position: absolute;
	background-image: url('/images/mono-logo.png');
	background-size: 100%;
	background-size: contain;
	height: 50vh;
	width: 90vw;

	+ * {
		margin-top: 0;
	}
`;

const Hero = () => {
	const { image, logo } = useStaticQuery(graphql`
query{
	image: file(relativePath: {eq: "jan-antonin-kolar.jpg" }) {
		sharp: childImageSharp {
	     fluid {
         ...GatsbyImageSharpFluid_withWebp
      }
		}
  }
	logo: file(relativePath: {eq: "mono-logo.png" }) {
		sharp: childImageSharp {
	     fluid {
         ...GatsbyImageSharpFluid_withWebp
      }
		}
  }
}
	`)

	return(
		<>
			<ImageBackground fluid={image.sharp.fluid} fadeIn="soft">
				<Header />
					<Logo fluid={logo.sharp.fluid} fadeIn="soft">
					</Logo>
			</ImageBackground>
		</>
	)
}

export default Hero;