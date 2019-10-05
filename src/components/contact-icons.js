import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'


library.add(faGithubSquare, faLinkedin, faEnvelope)

const contactIcons = () => {

	return (
		<>
			<h3>Contact</h3>
			<div className='contact-icons'>
      	<a href="https://github.com/GarrettOMoore"><FontAwesomeIcon id="icon" icon={faGithubSquare} size={'4x'}  color={'#2A363B'}/></a>
      	<a href="https://www.linkedin.com/in/r-garrett-moore/"><FontAwesomeIcon id="icon" icon={faLinkedin} size={'4x'}  color={'#2A363B'}/></a>
				<a href="mailto:robertgarrettmoore@gmail.com" ><FontAwesomeIcon id="icon" icon={faEnvelope} size={'4x'}  color={'#2A363B'}/></a>
      </div>
		</>
	)
}

export default contactIcons;