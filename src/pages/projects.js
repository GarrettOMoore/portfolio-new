import React from "react"
import useSiteMetadata from '../hooks/use-sitemetadata'
import Layout from '../components/layout';

const projects = () => {
	const { title, description } = useSiteMetadata();

	return (
		<>
			<Layout>
				<h2>Projects</h2>
			</Layout>
		</>
	)
}

export default projects;
