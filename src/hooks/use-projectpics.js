import {  useStaticQuery, graphql } from 'gatsby';


const useProjectPics = () => {
	const data = useStaticQuery(graphql`
    query {
    	allFile(filter: {relativeDirectory: {regex: "/(project-images)/"}}) {
        edges {
        	node {
            sharp: childImageSharp {
              fluid (maxWidth: 120, maxHeight: 120) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
`)
	return data
}

export default useProjectPics