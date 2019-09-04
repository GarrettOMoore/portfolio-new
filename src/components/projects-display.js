import React from 'react'
import { css } from '@emotion/core';
import styled from '@emotion/styled'; 
import ProjectIcons from '../components/project-icons';
import Crema from '../../images/project-images/recordex.jpeg'
import Record from '../../images/project-images/record-exchange-logo.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVoteYea, faUtensils, faExternalLinkSquareAlt, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare} from '@fortawesome/free-brands-svg-icons'
// import ProjectCards from '../components/project-cards'

library.add(faVoteYea, faUtensils, faGithubSquare, faExternalLinkSquareAlt, faChartLine)

const DisplayCard = styled('div')`
  width: 100%;
  height: 100%;
  border: 6px solid black;
  margin-top: 2rem;

  img {
    margin-top: 1rem;
    width: 50%;
    height: 50%;
  }

  #icon {
    margin: 1rem;
  }

  #icon * {
    vertical-align: bottom;
  }

  p {
    margin: 1rem;
  }
`

const ProjectsDisplay = () => {
  // const projectPics = useProjectPics();


  return(
    <>
      <DisplayCard>
        <FontAwesomeIcon icon={faChartLine} size={'10x'}  color={'#2A363B'} css={css`padding: 2rem; margin: 2rem;`}/>
        <h1>Job Tracker</h1> <br />
        <p>A simple Job Tracker app I built using React & Firebase's Auth API/Realtime Database.</p>
        <ProjectIcons git={'https://github.com/GarrettOMoore/study-job-tracker'} live={'https://firebase-jobtracker.netlify.com/'}/>
      </DisplayCard> 
      <DisplayCard>
        <FontAwesomeIcon icon={faUtensils} size={'10x'}  color={'#2A363B'} css={css`padding: 2rem; margin: 2rem;`}/>
        <h1>Mixte</h1> <br />
        <p>A MERN stack app utilizing the Edamam APIs. Users can create their digital pantry, and compile miscellaneous ingredients to pull recipes from the API.</p>
        <ProjectIcons git={'https://github.com/GarrettOMoore/edamam-fun'} live={'https://mixte-app.herokuapp.com/'}/>
      </DisplayCard> 
      <DisplayCard>
         <img src={Record} alt="Record Exchange Logo"/> <br />
         <p>Utilizing the Discogs API, Record Exchange is a place for users to track their record collection, as well as foster trade and conversation about the music they love. Built in Express with a mySQL backend.</p>
         <ProjectIcons git={'https://github.com/GarrettOMoore/record-exchange'} live={'https://recordexchange.herokuapp.com/'}/>
       </DisplayCard>
       <DisplayCard>
         <img src={Crema} alt="Crema logo"/> <br />
         <p>An app for coffee enthusiasts who want not only the best brewing methods, but a little information on coffee production and where to find the best local roasters. Made with MongoDB, Express, React, and Node.</p>
         <ProjectIcons git={'https://github.com/GarrettOMoore/crema'} live={'https://crema-gm.herokuapp.com/'}/>
       </DisplayCard>
       <DisplayCard>
         <FontAwesomeIcon icon={faVoteYea} size={'10x'}  color={'#2A363B'} css={css`padding: 2rem; margin: 2rem;`}/>
         <h1>Citizenly</h1> <br />
         <p>Built in the MERN stack, with data from the Meetups API, Cloudinary, & Mapbox - Citizenly is an app for those trying become more involved in US politics.</p>
         <ProjectIcons git={'https://github.com/GarrettOMoore/ga-wdi23-project-3'} live={'https://citizenlyapp.herokuapp.com/'}/>
       </DisplayCard>
    </>

  )
}

export default ProjectsDisplay;