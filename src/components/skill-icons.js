import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faDatabase, faDrum, faMusic } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faGit, faBootstrap, faHtml5, faJs, faLinkedin, faNode, faNpm, faPython, faReact, faAdobe } from '@fortawesome/free-brands-svg-icons'
import { DiDjango, DiHeroku, DiMongodb, DiVisualstudio, DiPostgresql, DiMaterializecss, DiTerminal, DiCss3 } from "react-icons/di";
import { IconContext } from "react-icons";
import { css } from '@emotion/core';

library.add(faDatabase, faMusic, faExternalLinkAlt, faGithubSquare, faGit, faBootstrap, faHtml5, faJs, faLinkedin, faNode, faNpm, faPython, faReact, faAdobe, faDrum)


const SkillIcons = (props) => {
    return(
        <div className='skill-icon-box' css={css`
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					margin: 4 auto;
                    width: 100%;
                    
                    .icon-box {
                        margin: 0.5rem;
                        width: 80px;
                    }

				`}>

        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faReact} size={'2x'}  color={'#2A363B'}/>
        </div>
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faJs} size={'2x'}  color={'#2A363B'}/>
        </div>
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faNode} size={'2x'}  color={'#2A363B'}/>
        </div>
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faGit} size={'2x'}  color={'#2A363B'}/>
        </div>
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faPython} size={'2x'}  color={'#2A363B'}/>
        </div>
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faDatabase} size={'2x'}  color={'#2A363B'}/>
        </div>
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faGithubSquare} size={'2x'}  color={'#2A363B'}/>
        </div>
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faNpm} size={'2x'}  color={'#2A363B'}/>
        </div>
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faHtml5} size={'2x'}  color={'#2A363B'}/>
        </div>
        <div className='icon-box'>
        <FontAwesomeIcon className='git-icon'icon={faAdobe} size={'2x'}  color={'#2A363B'}/>
        </div>
        {/* <IconContext.Provider value={{ size: "4.5em", color: "#2A363B" }}> */}
                <div className='icon-box'>
                <DiDjango className= "react-icon" size={'50px'} color={'#2A363B'} />
                </div>
                <div className='icon-box'>
                <DiHeroku className= "react-icon" size={'50px'} color={'#2A363B'}/>
                </div>
                <div className='icon-box'>
                <DiMongodb className= "react-icon" size={'50px'} color={'#2A363B'} />
                </div>
                <div className='icon-box'>
                <DiVisualstudio className= "react-icon" size={'50px'} color={'#2A363B'} />
                </div>
                <div className='icon-box'>
                <DiCss3 className= "react-icon" size={'50px'} color={'#2A363B'}/>
                </div>
                <div className='icon-box'>
                <DiPostgresql className= "react-icon" size={'50px'} color={'#2A363B'} /> 
                </div>
                <div className='icon-box'>
                <DiTerminal className= "react-icon" size={'50px'} color={'#2A363B'}/> 
                </div>

        {/* </IconContext.Provider> */}
        </div>
    )
}

export default SkillIcons