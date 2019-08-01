import React from "react"
import useSiteMetadata from '../hooks/use-sitemetadata'
import Layout from '../components/layout';

const contact = () => {
	const { title, description } = useSiteMetadata();

	return (
		<>
			<Layout>
				<h2>Contact Here</h2>
			</Layout>
		</>
	)
}

export default contact;