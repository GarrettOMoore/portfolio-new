import React from 'react'
import Crema from '../components/crema';
import record from '/Users/garrettmoore/Code/Personal/gatsby-project/images/record-x_2.png'
import citizen from '../../images/citizenly-1.png'
import ProjectIcons from '../components/project-icons';
import crema from '../../images/crema-about-mobile.png'
import mixte from '../../images/mixte-iphone-screen.png'


const ProjectsDisplay = (props) => {
    return(
        <>
           <section className='projects-main'>
            <p className='project-header'>Mixte</p>
            <img src={mixte} className='project-pic' width={'190px'} height={'350px'} />
            <p className='project-info'>A MERN stack app utilizing the Edamam APIs. Users can create their digital pantry, and compile miscellaneous ingredients to pull recipes from the API.</p> 
             <ProjectIcons git={'https://github.com/GarrettOMoore/edamam-fun'} live={'https://mixte-app.herokuapp.com/'}/> 
             <p className='project-header'>Crema</p>
            <img src={crema} className='project-pic' width={'190px'} height={'350px'} />
            <p className='project-info'>An app for coffee enthusiasts who want not only the best brewing methods, but some information on coffee production in addition to where to find the best local roasters. Made with MongoDB, Express, React, and Node.</p> 
             <ProjectIcons git={'https://github.com/GarrettOMoore/crema'} live={'https://crema-gm.herokuapp.com/'}/> 
             <p className='project-header'>Record Exchange</p>
            <img src={record} className='project-pic-sqr' width={'285px'} height={'285px'} />
            <p className='project-info'>Utilizing the Discogs API, Record Exchange is a place for users to track their record collection, as well as foster trade and conversation about the music they love. Built in Express with a mySQL backend.</p> 
              <ProjectIcons git={'https://github.com/GarrettOMoore/record-exchange'} live={'https://recordexchange.herokuapp.com/'}/> 
            <p className='project-header'>Citizenly</p> 
            <img src={citizen} className='project-pic' width={'190px'} height={'350px'} /> 
            <p className='project-info'>Built in React, with a MongoDB backend - Citizenly is an app for those trying become more involved in US politics.</p> 
            <ProjectIcons git={'https://github.com/GarrettOMoore/ga-wdi23-project-3'} live={'https://citizenlyapp.herokuapp.com/'}/> 
            </section> 
        </>
    )
}

export default ProjectsDisplay;