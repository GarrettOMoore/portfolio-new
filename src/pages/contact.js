import React from "react"
import Layout from '../components/layout';
import ContactIcons from '../components/contact-icons';
import { css } from '@emotion/core';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'


library.add(faGithubSquare, faLinkedin, faEnvelope)

const contact = () => {

	return (
		<>
			<Layout>
				<ContactIcons />
				<div className="container" css={css`
														@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);
														* {
														  margin: 0;
														  padding: 0;
														  box-sizing: border-box;
														  -webkit-box-sizing: border-box;
														  -moz-box-sizing: border-box;
														  -webkit-font-smoothing: antialiased;
														  -moz-font-smoothing: antialiased;
														  -o-font-smoothing: antialiased;
														  font-smoothing: antialiased;
														  text-rendering: optimizeLegibility;
														}

														body {
														  font-family: "Roboto", Helvetica, Arial, sans-serif;
														  font-weight: 100;
														  font-size: 12px;
														  line-height: 30px;
														  color: #777;
														  background: #99B898;
														}

														.container {
														  max-width: 400px;
														  width: 100%;
														  margin: 0 auto;
														  position: relative;
														}

														#contact input[type="text"],
														#contact input[type="email"],
														#contact input[type="tel"],
														#contact input[type="url"],
														#contact textarea,
														#contact button[type="submit"] {
														  font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
														}

														#contact {
														  background: #F9F9F9;
															margin: 0 0;
															padding: 25px;
														  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
														}

														#contact h3 {
														  display: block;
														  font-size: 30px;
														  font-weight: 300;
														  margin-bottom: 10px;
														}

														#contact h4 {
														  margin: 5px 0 15px;
														  display: block;
														  font-size: 13px;
														  font-weight: 400;
														}

														#contact input[type="text"],
														#contact input[type="email"],
														#contact input[type="tel"],
														#contact input[type="url"],
														#contact textarea {
														  width: 100%;
														  border: 1px solid #ccc;
														  background: #FFF;
														  margin: 0 0 5px;
														  padding: 10px;
														}

														#contact input[type="text"]:hover,
														#contact input[type="email"]:hover,
														#contact input[type="tel"]:hover,
														#contact input[type="url"]:hover,
														#contact textarea:hover {
														  -webkit-transition: border-color 0.3s ease-in-out;
														  -moz-transition: border-color 0.3s ease-in-out;
														  transition: border-color 0.3s ease-in-out;
														  border: 1px solid #aaa;
														}

														#contact textarea {
														  height: 100px;
														  max-width: 100%;
														  resize: none;
														}

														#contact button[type="submit"] {
														  cursor: pointer;
														  width: 100%;
														  border: none;
														  background: #4CAF50;
														  color: #FFF;
														  margin: 0 0 5px;
														  padding: 10px;
														  font-size: 15px;
														}

														#contact button[type="submit"]:hover {
														  background: #43A047;
														  -webkit-transition: background 0.3s ease-in-out;
														  -moz-transition: background 0.3s ease-in-out;
														  transition: background-color 0.3s ease-in-out;
														}

														#contact button[type="submit"]:active {
														  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
														}

														.copyright {
														  text-align: center;
														}

														#contact input:focus,
														#contact textarea:focus {
														  outline: 0;
														  border: 1px solid #aaa;
														}

														::-webkit-input-placeholder {
														  color: #888;
														}

														:-moz-placeholder {
														  color: #888;
														}

														::-moz-placeholder {
														  color: #888;
														}

														:-ms-input-placeholder {
														  color: #888;
														}
				`}> 
				<div id="container">
					<form id="contact" action="" method="post">
						<input placeholder="Your name" type="text" tabIndex="1" required autoFocus></input>
						<input placeholder="Your Email Address" type="email" tabIndex="2" required></input>
						<textarea placeholder="Type your message here...." tabIndex="5" required></textarea>
						<button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
  				</form>
				</div>
				</div>
			</Layout>
		</>
	)
}

export default contact;