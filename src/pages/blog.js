import React from "react"
import Layout from '../components/layout';
import ContactIcons from '../components/contact-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';


library.add(faGithubSquare, faLinkedin, faEnvelope)

const blog = () => {
	const posts = usePosts();

	return (
		<>
			<Layout>
				<ContactIcons />
				{posts.map(post => (
					<PostPreview key={post.slug} post={post} />
				))}
			</Layout>
		</>
	)
}

export default blog;