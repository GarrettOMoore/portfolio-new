import React from "react"
import Layout from '../components/layout';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'


library.add(faGithubSquare, faLinkedin, faEnvelope)

const contactIcons = () => {

	return (
		<>

				<div className='contact-icons'>
        	<FontAwesomeIcon icon={faGithubSquare} size={'5x'}  color={'#2A363B'}/>
        	<FontAwesomeIcon icon={faLinkedin} size={'5x'}  color={'#2A363B'}/>
					<FontAwesomeIcon icon={faEnvelope} size={'5x'}  color={'#2A363B'}/>
        </div>
		</>
	)
}

export default contactIcons;