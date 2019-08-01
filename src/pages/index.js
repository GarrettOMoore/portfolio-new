import React from "react"
import useSiteMetadata from '../hooks/use-sitemetadata';
import Layout from '../components/layout';



const index = () => {
	const { title, description } = useSiteMetadata();


	return (
		<>
			<Layout>
				<h2>{title}</h2>
				<h2>{description}</h2>
			</Layout>
		</>
	)
}

export default index;
