import React from "react"
import Layout from '../components/layout';
import ProjectsDisplay from '../components/projects-display'

const projects = () => {

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
