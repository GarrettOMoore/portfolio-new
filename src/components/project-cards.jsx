import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import Front from '../components/front';
import Back from '../components/back';
import { css } from '@emotion/core';
import styled from '@emotion/styled'; 
import Crema from '../../images/project-images/recordex.jpeg'
import Record from '../../images/project-images/record-exchange-logo.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVoteYea, faUtensils } from '@fortawesome/free-solid-svg-icons'

library.add(faVoteYea, faUtensils)

const DisplayCard = styled('div')`
  width: 100%;
  height: 100%;
  border: 6px solid black;
  margin-top: 2rem;

  h1 {
    margin: 1rem;
  }

  img {
    margin-top: 1rem;
    width: 50%;
    height: 50%;
  }
`

class ProjectCards extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isFlipped: false,
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.setState(prevState => ({ isFlipped: !prevState.isFlipped}));
	}

	render() {
		return(
			
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
      	<DisplayCard>
      	  <img src={Record} key="front"/> 
      	  <button onClick={this.handleClick}>Click to flip</button>
      	</DisplayCard>
 
        <div key="back">
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>
		)
	}
}

export default ProjectCards;