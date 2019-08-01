import React from "react"
import useSiteMetadata from '../hooks/use-sitemetadata'
import Layout from '../components/layout';
import ProjectsDisplay from '../components/projects-display'

const projects = () => {
	const { title, description } = useSiteMetadata();

	return (
		<>
			<Layout>
				<h2>Projects</h2>
				<ProjectsDisplay />
			</Layout>
		</>
	)
}

export default projects;
