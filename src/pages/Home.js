import React from 'react'

export default class Home extends React.Component {
	render(){
		return(
			<div class="main-container">
				<div  id="home-container" >
					<img alt="Blue Hacks Logo" src={require('../assets/logo-big.png')} />
					<p>
						<span class="cyan"> February 22, 2020 (8:00 AM) to February 23, 2020 (8:00 PM) </span>
						<span class="white"> 5th Floor, New Rizal Library </span>
						<span class="white"> Ateneo de Manila University </span>
					</p>
				</div>
			</div>
		);
	}
}
