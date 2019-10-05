import React from "react"
import Layout from '../components/layout';
import ProjectsDisplay from '../components/projects-display'
import ContactIcons from '../components/contact-icons';


const projects = () => {

	return (
		<>
			<Layout>
			<ContactIcons />
				<h1>Projects</h1>
				<ProjectsDisplay />
			</Layout>
		</>
	)
}

export default projects;
