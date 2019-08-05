import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { css } from '@emotion/core';

library.add(faGithubSquare, faExternalLinkSquareAlt, faLinkedin)

const ProjectIcons = (props) => {
    return(
        <div>
            <div className='project-icons' css={css`
                * {
                    margin: 1rem;
                    vertical-align: bottom;
                }

                #icon:hover {
                    z-index: 10;
					border: 0px solid transparent;
					color: #D9863D;
                }
            `}>
                <a href={props.git}target="_blank"><FontAwesomeIcon icon={faGithubSquare} size={'4x'}  color={'#2A363B'} id={"icon"}/></a>
                <a href={props.live}target="_blank"><FontAwesomeIcon icon={faExternalLinkSquareAlt} size={'4x'} color={'#2A363B'} id={"icon"} /></a>
            </div>
        </div>
    )
}

export default ProjectIcons;