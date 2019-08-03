import React from 'react'
// import Crema from '../components/crema';
// import record from '/Users/garrettmoore/Code/Personal/gatsby-project/images/record-exchange-logo.png'
// import citizen from '../../images/citizenly-logo.svg'
// import ProjectIcons from '../components/project-icons';
// import crema from '../../images/crema.png'
// import mixte from '../../images/mixte-logo.png'
import styled from '@emotion/styled'; 
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

export const squareImage = graphql`
  fragment squareImage on File {
    sharp: childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const ProjectsDisplay = (props) => {
  const { crema, mixte, record, citizenly } = useStaticQuery(graphql`
  query {
    crema: file(relativePath: {eq: "crema.png" }) {
      ...squareImage
    }
    mixte: file(relativePath: {eq: "mixte-logo.png" }) {
      ...squareImage
    }
    record: file(relativePath: {eq: "record-exchange-logo.png" }) {
      ...squareImage
    }
    citizenly: file(relativePath: {eq: "citizenly-logo.svg" }) {
      ...squareImage
    }
  }
`)

    return(
        <>
          <Image fluid={crema.sharp.fluid} />
          <Image fluid={mixte.sharp.fluid} />
          <Image fluid={record.sharp.fluid} />
          <Image fluid={citizenly.sharp.fluid} />
        </>
    )
}

export default ProjectsDisplay;