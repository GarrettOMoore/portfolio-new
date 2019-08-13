import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import ReadLink from '../components/read-link';

export const query = graphql`
	query($slug: String!) {
	  mdx (frontmatter: {slug: {eq: $slug}}) {
	    frontmatter {
	      title
	      author
	    }
				body
	  }
	}
`

const PostTemplate = ({ data: {mdx: post} }) => (
	<Layout>
		<h1>{post.frontmatter.title}</h1>
		<p
		css={css`
			font-size: 1.2rem;
			letter-spacing: 0.2rem;
		`}
		>
			Posted by {post.frontmatter.author} <br />
			8/12/2019
		</p>
		<MDXRenderer>{post.body}</MDXRenderer>
		<ReadLink to='/contact'>&larr; Back to all posts</ReadLink>
	</Layout>
)

export default PostTemplate;