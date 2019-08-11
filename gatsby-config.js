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
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [{resolve: 'gatsby-remark-images'}],
      },
		},
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
				name: 'posts',
				path: 'posts',
			},
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project-images',
        path: 'images/project-images',
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'garrettmoore'
      }
    },
  ],
};
