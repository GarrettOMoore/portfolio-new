module.exports = {
  siteMetadata: {
    title: `Garrett Moore`,
    description: `Full Stack Software Developer & Musician`,
    author: `Garrett Moore`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project-images',
        path: 'images/project-images',
      },
    },
  ],
};
