import React from "react"
import Layout from "../components/layout"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import ContactIcons from "../components/contact-icons"
import { css } from "@emotion/core"
import Instagram from "../components/instagram"

const index = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "closeup-cb.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <ContactIcons />
        <h1>About Me</h1>
        <Image
          fluid={image.sharp.fluid}
          css={css`
            opacity: 0.8;
          `}
        />
        <main>
          <p>
            Hello! My name is Garrett, I'm a full stack web developer and
            musician based in Seattle, WA. Originally from San Diego, CA - I
            moved to Seattle for a change of scenery in 2008, and have called it
            home ever since. When I'm not busy building things for the web, you
            can usually find me playing music, or digging around local record
            and book shops.
          </p>
        </main>
        <h1>Skills: </h1>
        <div
          css={css`
            display: flex;
            width: 100%;
            height: 100%;
            margin: 0 auto;
            top: 1rem;
            flex-wrap: wrap;
            justify-content: space-between;
            text-align: center;

            div {
              display: flex;
              margin: 0 auto;
              top: 1;
              font-size: 1.5rem;
            }

            ul {
              padding: 0;
            }
          `}
        >
          <div>
            <ul>
              <li>React</li>
              <li>Gatsby</li>
              <li>GraphQL</li>
              <li>JavaScript</li>
              <li>Firebase</li>
              <li>MongoDB</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>TypeScript</li>
              <li>Heroku</li>
              <li>Python</li>
              <li>HTML5 Canvas</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Django</li>
              <li>PostGRES</li>
              <li>REST API</li>
              <li>Agile/SCRUM</li>
              <li>Git</li>
              <li>Terminal</li>
              <li>pSQL</li>
              <li>Sequelize</li>
              <li>Netlify</li>
              <li>MapBox</li>
              <li>Cloudinary</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
        <p>...always adding new things!</p>
        <Instagram />
      </Layout>
    </>
  )
}

export default index
