import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useInstagram from '../hooks/use-instagram';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faInstagram);

const Insta = () => {
	const instaPhotos = useInstagram();

	return(
		<>
			<div
				css={css`
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					margin: 1rem -0.5rem;
					margin-top: 4rem;
				`}>
				{instaPhotos.map(photo => (
					<a 
						key={photo.id}
						href={`https://instagram.com/p/${photo.id}/`}
						css={css`
							box-shadow: 0.5
							display: block;
							margin: 0.5rem;
							max-width: calc(33% - 1rem);
							width: 120px;
							transition: 200ms box-shadow linear;

							:focus,
							:hover {
								box-shadow: 0 2px 14px #22222244;
								z-index: 10;
							}
						`}
					>
						<Image
							fluid={photo.fluid}
							alt={photo.caption}
							css={css`
								width: 100%;

								* {
									margin-top: 0;
								}
							`}/>
					</a>
				))}
			</div>
			<a href={`https://instagram.com/garrettmoore`}>
				<FontAwesomeIcon icon={faInstagram} size={'4x'}  color={'#2A363B'} id={"icon"}/>
			</a>
		</>
	)
}

export default Insta;