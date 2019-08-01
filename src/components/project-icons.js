import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { css } from '@emotion/core';

library.add(faGithubSquare, faExternalLinkAlt, faLinkedin)

const ProjectIcons = (props) => {
    return(
        <div css={css`
					* {
					display: flex;
					flex-wrap: wrap;
					}

					* +  {
						box-shadow: 0.5
							display: block;
							margin: 0.5rem;
							max-width: calc(33% - 1rem);
							width: 120px;
							transition: 200ms box-shadow linear;
					}
				`}>
            <div className='project-link'>
                <a href={props.git}target="_blank"><FontAwesomeIcon className='proj-git-icon'icon={faGithubSquare} size={'4x'}  color={'#2A363B'}/></a>
            </div>
            <div className='project-link'>
                <a href={props.live}target="_blank"><FontAwesomeIcon className='proj-link-icon'icon={faExternalLinkAlt} size={'4x'} color={'#2A363B'} /></a>
            </div>
        </div>
    )
}

export default ProjectIcons;