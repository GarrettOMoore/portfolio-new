import React from 'react'
import { css } from '@emotion/core';
import styled from '@emotion/styled'; 
import ProjectIcons from '../components/project-icons';
import Crema from '../../images/project-images/recordex.jpeg'
import Record from '../../images/project-images/record-exchange-logo.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVoteYea, faUtensils, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare} from '@fortawesome/free-brands-svg-icons'
// import ProjectCards from '../components/project-cards'

library.add(faVoteYea, faUtensils, faGithubSquare, faExternalLinkSquareAlt)

const DisplayCard = styled('div')`
  width: 100%;
  height: 100%;
  border: 6px solid black;
  margin-top: 2rem;

  h1 {
    margin: 1rem;
  }

  img {
    margin-top: 1rem;
    width: 50%;
    height: 50%;
  }
`

const ProjectsDisplay = () => {
  // const projectPics = useProjectPics();


  return(
    <>
      <DisplayCard>
        <FontAwesomeIcon icon={faUtensils} size={'10x'}  color={'#2A363B'} css={css`padding: 2rem; margin: 2rem;`}/>
        <h1>Mixte</h1> <br />
        <ProjectIcons git={'https://github.com/GarrettOMoore/edamam-fun'} live={'https://mixte-app.herokuapp.com/'}/>
      </DisplayCard> 
      <DisplayCard>
         <img src={Record}/> <br />
         <ProjectIcons git={'https://github.com/GarrettOMoore/record-exchange'} live={'https://recordexchange.herokuapp.com/'}/>
       </DisplayCard>
       <DisplayCard>
         <img src={Crema}/> <br />
         <ProjectIcons git={'https://github.com/GarrettOMoore/crema'} live={'https://crema-gm.herokuapp.com/'}/>

       </DisplayCard>
       <DisplayCard>
         <FontAwesomeIcon icon={faVoteYea} size={'10x'}  color={'#2A363B'} css={css`padding: 2rem; margin: 2rem;`}/>
         <h1>Citizenly</h1> <br />
         <ProjectIcons git={'https://github.com/GarrettOMoore/ga-wdi23-project-3'} live={'https://citizenlyapp.herokuapp.com/'}/>
       </DisplayCard>
    </>

  )
}

export default ProjectsDisplay;