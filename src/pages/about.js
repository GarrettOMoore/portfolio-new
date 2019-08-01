import React from "react"
import useSiteMetadata from '../hooks/use-sitemetadata'
import Layout from '../components/layout';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";
import Icons from '../components/skill-icons'

const about = () => {
	const { title, description } = useSiteMetadata();

	const { image } = useStaticQuery(graphql`
		query {
			image: file(relativePath: {eq: "lagoon.jpeg" }) {
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
				<h2>About Here</h2>
				<Image fluid={image.sharp.fluid} />
				{/* <Icons /> */}
				<div>
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
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue. Nam libero justo laoreet sit. Dui sapien eget mi proin sed libero enim. Vel turpis nunc eget lorem dolor sed viverra. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Vitae congue eu consequat ac felis donec et. Egestas quis ipsum suspendisse ultrices. Viverra accumsan in nisl nisi scelerisque. Et netus et malesuada fames ac turpis egestas integer eget. Arcu cursus euismod quis viverra nibh cras. Pharetra magna ac placerat vestibulum lectus mauris ultrices. At in tellus integer feugiat scelerisque varius.

Ut porttitor leo a diam sollicitudin. A iaculis at erat pellentesque adipiscing commodo. Risus feugiat in ante metus dictum at tempor commodo. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Ut placerat orci nulla pellentesque dignissim enim sit amet. Sollicitudin aliquam ultrices sagittis orci. Volutpat blandit aliquam etiam erat velit scelerisque in. Bibendum at varius vel pharetra vel turpis nunc. Eget arcu dictum varius duis at. Sit amet mattis vulputate enim nulla aliquet porttitor. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Lectus urna duis convallis convallis tellus id interdum. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Semper viverra nam libero justo laoreet sit. Diam maecenas sed enim ut sem. Diam maecenas ultricies mi eget. Euismod elementum nisi quis eleifend quam adipiscing.

Cras tincidunt lobortis feugiat vivamus at. Odio pellentesque diam volutpat commodo. Nulla pellentesque dignissim enim sit. Dui faucibus in ornare quam viverra orci sagittis eu. Fames ac turpis egestas integer eget. Nunc sed velit dignissim sodales ut eu. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Elementum eu facilisis sed odio morbi. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Maecenas sed enim ut sem viverra aliquet. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Enim ut tellus elementum sagittis vitae. Cras ornare arcu dui vivamus arcu felis bibendum ut. Dignissim suspendisse in est ante in nibh mauris. Risus sed vulputate odio ut enim blandit volutpat. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus.

Commodo odio aenean sed adipiscing diam. A scelerisque purus semper eget. Dictum varius duis at consectetur lorem donec. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Sit amet risus nullam eget felis eget nunc. Diam ut venenatis tellus in. Nunc sed velit dignissim sodales ut. Morbi leo urna molestie at. Faucibus nisl tincidunt eget nullam non nisi est. Volutpat diam ut venenatis tellus in metus vulputate eu. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Turpis tincidunt id aliquet risus feugiat in ante. At augue eget arcu dictum varius. Ullamcorper dignissim cras tincidunt lobortis. Sit amet mauris commodo quis imperdiet massa tincidunt. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Facilisis mauris sit amet massa. At erat pellentesque adipiscing commodo elit at. Facilisis leo vel fringilla est.

Nulla pellentesque dignissim enim sit amet. Ut faucibus pulvinar elementum integer enim neque volutpat. Leo a diam sollicitudin tempor id eu nisl nunc. Nec nam aliquam sem et. Ornare suspendisse sed nisi lacus sed viverra tellus in. Euismod lacinia at quis risus sed vulputate. Diam in arcu cursus euismod quis viverra nibh cras. Ultricies leo integer malesuada nunc vel. Volutpat lacus laoreet non curabitur gravida arcu. Felis eget nunc lobortis mattis. Tortor at auctor urna nunc id cursus metus aliquam.</p>
			</Layout>
		</>
	)
}

export default about;
