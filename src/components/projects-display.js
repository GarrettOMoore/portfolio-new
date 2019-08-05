import React from 'react'
import { css } from '@emotion/core';
import Image from 'gatsby-image';
import useProjectPics from '../hooks/use-projectpics';
import Crema from '../../images/project-images/recordex.jpeg'
import Record from '../../images/project-images/record-exchange-logo.png'

const ProjectsDisplay = () => {
  // const projectPics = useProjectPics();


  return(
    <>
    <div css={css`
      border: 6px solid black;
      margin-top: 2rem;
    `}>
      <img css={css`
        margin-top: 2rem;
        width: 300px;
        height: 350px;
      `}src={Crema}/>
    </div>
    <div css={css`
      border: 6px solid black;
      margin-top: 2rem;
    `}>
      <img css={css`
        margin-top: 2rem;
        width: 300px;
        height: 350px;
      `}src={Record}/> 
    </div>
    </>

  )
}

export default ProjectsDisplay;