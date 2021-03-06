import React from 'react'

export default class About extends React.Component {
	render(){
		return(
			<div class="main-container">
				<div id="about-container">
					{/*<h1>
						<span class="blue">def </span>
						<span class="green"> bluehacks</span>:
					</h1>
					<p>
						Blue Hacks is a two-day <span class="orange">hackathon</span> that invites college and
						university students to engage in a <span class="orange">collaborative
						application development</span> in a competitive atmosphere. 
						Participants, in <span class="orange">teams of 3-4</span>, will have <span class="orange">24 hours </span> 
						to plan and develop their applications to be pitched 
						to a panel of judges with diverse backgrounds and disciplines.
					</p>*/}
					<iframe title="Blue Hacks 2020 Primer" class="primer-container" src="https://docs.google.com/presentation/d/e/2PACX-1vRyK3Uk-dAv5UpuH159wI3KjTcCiGcPKR_pSIjv--iNgYssl1zsZt5y4HAet2ipCreLT5SvKHDD7bKK/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
				</div>
			</div>
		);
	}
}